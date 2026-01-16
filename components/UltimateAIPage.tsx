import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Image as ImageIcon, Video, Mic, Send, Upload, Brain, Globe, MapPin, Play, X, Loader, MessageSquare, Edit } from 'lucide-react';
import { generateSmartContent, generateImage, editImage, generateVideo, connectLiveSession, generateSpeech } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';

// Audio decoding helpers
const decodeAudioData = async (base64: string, ctx: AudioContext) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
  
  // Create buffer manually (Gemini returns raw PCM 16-bit, 24kHz)
  const dataInt16 = new Int16Array(bytes.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
};

const UltimateAIPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'image' | 'video' | 'live'>('chat');
  
  // -- Key Selection Check --
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
        try {
          await window.aistudio.openSelectKey();
        } catch (e) { console.error(e); }
      }
    };
    if (activeTab === 'video' || activeTab === 'image') checkKey();
  }, [activeTab]);

  return (
    <div className="flex h-[100dvh] bg-slate-50 font-sans">
      {/* Sidebar */}
      <div className="w-20 md:w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-4 md:p-6 border-b border-slate-800 font-bold text-white flex items-center gap-3">
          <Sparkles className="text-indigo-400" />
          <span className="hidden md:block">Ultimate AI</span>
        </div>
        <nav className="flex-1 p-2 space-y-2">
          {[
            { id: 'chat', icon: MessageSquare, label: 'Smart Chat' },
            { id: 'image', icon: ImageIcon, label: 'Image Studio' },
            { id: 'video', icon: Video, label: 'Video Studio' },
            { id: 'live', icon: Mic, label: 'Live Voice' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-slate-800'}`}
            >
              <item.icon size={20} />
              <span className="hidden md:block text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={onBack} className="w-full flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-slate-800 text-xs uppercase tracking-widest">
            <X size={16} /> <span className="hidden md:inline">Exit Studio</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'chat' && <ChatView />}
        {activeTab === 'image' && <ImageStudio />}
        {activeTab === 'video' && <VideoStudio />}
        {activeTab === 'live' && <LiveVoice />}
      </div>
    </div>
  );
};

// --- CHAT VIEW ---
const ChatView = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [search, setSearch] = useState(false);
  const [maps, setMaps] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim() && !image) return;
    const userMsg = { role: 'user', text: input, image };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setImage(null);
    setLoading(true);

    // Get location for Maps if needed
    let location;
    if (maps) {
      try {
        const pos: any = await new Promise((resolve, reject) => 
          navigator.geolocation.getCurrentPosition(resolve, reject));
        location = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
      } catch (e) { console.warn("Loc failed"); }
    }

    const response = await generateSmartContent(userMsg.text, userMsg.image ? userMsg.image.split(',')[1] : null, { thinking, search, maps, location });
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex-1 overflow-y-auto space-y-6 pb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-200' : 'bg-indigo-100 text-indigo-600'}`}>
              {m.role === 'user' ? <Upload size={18} /> : <Brain size={18} />}
            </div>
            <div className={`p-4 rounded-2xl max-w-[80%] ${m.role === 'user' ? 'bg-slate-100' : 'bg-white shadow-sm border border-slate-100'}`}>
              {m.image && <img src={m.image} alt="Upload" className="mb-3 rounded-lg max-h-48" />}
              <MarkdownRenderer content={m.text} />
            </div>
          </div>
        ))}
        {loading && <div className="animate-pulse text-indigo-500 font-medium">Thinking...</div>}
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xl">
        {image && (
          <div className="relative inline-block mb-2">
            <img src={image} className="h-16 rounded-lg border border-slate-200" />
            <button onClick={() => setImage(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><X size={12} /></button>
          </div>
        )}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
          <Toggle label="Deep Think" icon={Brain} active={thinking} onClick={() => setThinking(!thinking)} />
          <Toggle label="Google Search" icon={Globe} active={search} onClick={() => { setSearch(!search); if(!search) setThinking(false); }} />
          <Toggle label="Google Maps" icon={MapPin} active={maps} onClick={() => { setMaps(!maps); if(!maps) setThinking(false); }} />
        </div>
        <div className="flex gap-2">
          <label className="p-3 bg-slate-100 rounded-xl cursor-pointer hover:bg-slate-200 text-slate-500">
            <Upload size={20} />
            <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
          </label>
          <input 
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
          />
          <button onClick={handleSend} disabled={loading} className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- IMAGE STUDIO ---
const ImageStudio = () => {
  const [mode, setMode] = useState<'gen' | 'edit'>('gen');
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1K');
  const [ratio, setRatio] = useState('1:1');
  const [srcImage, setSrcImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGen = async () => {
    setLoading(true);
    setResult(null);
    try {
      if (mode === 'gen') {
        const res = await generateImage(prompt, ratio, size);
        setResult(res);
      } else if (srcImage) {
        // Remove data url prefix for API
        const base64 = srcImage.split(',')[1];
        const res = await editImage(base64, prompt);
        setResult(res);
      }
    } catch (e) { alert("Failed to process image."); }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col md:flex-row p-6 gap-6">
      <div className="w-full md:w-80 space-y-6">
        <div className="flex bg-slate-200 p-1 rounded-xl">
          <button onClick={() => setMode('gen')} className={`flex-1 py-2 rounded-lg text-sm font-bold ${mode === 'gen' ? 'bg-white shadow' : ''}`}>Generate</button>
          <button onClick={() => setMode('edit')} className={`flex-1 py-2 rounded-lg text-sm font-bold ${mode === 'edit' ? 'bg-white shadow' : ''}`}>Edit</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Prompt</label>
            <textarea 
              className="w-full p-3 bg-white border border-slate-200 rounded-xl h-32 focus:ring-2 ring-indigo-500 outline-none mt-1" 
              placeholder={mode === 'gen' ? "A futuristic city..." : "Add a retro filter..."}
              value={prompt} onChange={e => setPrompt(e.target.value)}
            />
          </div>

          {mode === 'gen' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Aspect Ratio</label>
                <select className="w-full p-2 mt-1 bg-white border rounded-lg" value={ratio} onChange={e => setRatio(e.target.value)}>
                  <option>1:1</option><option>16:9</option><option>9:16</option><option>4:3</option><option>3:4</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Size</label>
                <select className="w-full p-2 mt-1 bg-white border rounded-lg" value={size} onChange={e => setSize(e.target.value)}>
                  <option>1K</option><option>2K</option><option>4K</option>
                </select>
              </div>
            </div>
          )}

          {mode === 'edit' && (
             <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Source Image</label>
                <input type="file" className="mt-1 w-full text-sm" onChange={e => {
                  const f = e.target.files?.[0];
                  if(f) { const r = new FileReader(); r.onload = () => setSrcImage(r.result as string); r.readAsDataURL(f); }
                }} />
                {srcImage && <img src={srcImage} className="mt-2 h-32 rounded-lg border" />}
             </div>
          )}

          <button 
            onClick={handleGen} 
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : (mode === 'gen' ? 'Generate Image' : 'Edit Image')}
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-300 relative overflow-hidden">
        {result ? <img src={result} className="max-w-full max-h-full object-contain shadow-2xl" /> : <div className="text-slate-400">Result will appear here</div>}
      </div>
    </div>
  );
};

// --- VIDEO STUDIO ---
const VideoStudio = () => {
  const [prompt, setPrompt] = useState('');
  const [ratio, setRatio] = useState('16:9');
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleGen = async () => {
    setLoading(true);
    setVideoSrc(null);
    try {
      const vid = await generateVideo(prompt, image ? image.split(',')[1] : null, ratio);
      if (vid) setVideoSrc(vid);
    } catch (e) { alert("Video generation failed."); }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col md:flex-row p-6 gap-6">
      <div className="w-full md:w-80 space-y-6">
        <h2 className="text-xl font-bold">Video Studio</h2>
        <textarea 
          className="w-full p-3 bg-white border border-slate-200 rounded-xl h-32 mt-1" 
          placeholder="A cinematic drone shot of a neon city..."
          value={prompt} onChange={e => setPrompt(e.target.value)}
        />
         <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Start Image (Optional)</label>
            <input type="file" className="mt-1 w-full text-sm" onChange={e => {
              const f = e.target.files?.[0];
              if(f) { const r = new FileReader(); r.onload = () => setImage(r.result as string); r.readAsDataURL(f); }
            }} />
            {image && <img src={image} className="mt-2 h-20 rounded-lg border" />}
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Aspect Ratio</label>
            <select className="w-full p-2 mt-1 bg-white border rounded-lg" value={ratio} onChange={e => setRatio(e.target.value)}>
              <option>16:9</option><option>9:16</option>
            </select>
          </div>
        <button 
          onClick={handleGen} disabled={loading}
          className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? 'Generating Video (Wait 1-2m)...' : 'Generate Video'}
        </button>
      </div>
      <div className="flex-1 bg-black rounded-3xl flex items-center justify-center overflow-hidden">
        {loading ? <div className="text-white animate-pulse">Processing Video...</div> : 
         videoSrc ? <video controls src={videoSrc} className="max-w-full max-h-full" /> : 
         <div className="text-slate-600">Video Preview</div>}
      </div>
    </div>
  );
};

// --- LIVE VOICE ---
const LiveVoice = () => {
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState("Ready to connect");
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sessionRef = useRef<any>(null);

  const toggleConnection = async () => {
    if (connected) {
      sessionRef.current?.close();
      setConnected(false);
      setStatus("Disconnected");
      return;
    }

    try {
      setStatus("Connecting...");
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = ctx;
      nextStartTimeRef.current = 0;

      // Input Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const inputCtx = new AudioContext({ sampleRate: 16000 });
      const source = inputCtx.createMediaStreamSource(stream);
      const processor = inputCtx.createScriptProcessor(4096, 1, 1);
      
      const session = await connectLiveSession(
        async (base64Audio) => {
          // Play Audio
          if (audioContextRef.current) {
            const buffer = await decodeAudioData(base64Audio, audioContextRef.current);
            const src = audioContextRef.current.createBufferSource();
            src.buffer = buffer;
            src.connect(audioContextRef.current.destination);
            const now = audioContextRef.current.currentTime;
            // Schedule playback
            const start = Math.max(nextStartTimeRef.current, now);
            src.start(start);
            nextStartTimeRef.current = start + buffer.duration;
          }
        },
        () => {
          setConnected(false);
          setStatus("Disconnected");
          stream.getTracks().forEach(t => t.stop());
          inputCtx.close();
        }
      );

      sessionRef.current = session;

      // Send Audio
      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        // Downsample/Convert float32 to pcm16
        const pcm16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          pcm16[i] = inputData[i] * 32768;
        }
        const uint8 = new Uint8Array(pcm16.buffer);
        let binary = '';
        for(let i=0; i<uint8.length; i++) binary += String.fromCharCode(uint8[i]);
        const b64 = btoa(binary);
        
        session.sendRealtimeInput({ media: { mimeType: 'audio/pcm;rate=16000', data: b64 } });
      };

      source.connect(processor);
      processor.connect(inputCtx.destination);
      
      setConnected(true);
      setStatus("Listening...");
    } catch (e) {
      console.error(e);
      setStatus("Connection Failed");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8 bg-slate-900 text-white">
      <div className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 ${connected ? 'bg-red-500 shadow-[0_0_50px_rgba(239,68,68,0.5)] animate-pulse' : 'bg-slate-700'}`}>
        <Mic size={64} />
      </div>
      <div className="text-2xl font-bold">{status}</div>
      <button 
        onClick={toggleConnection}
        className={`px-8 py-4 rounded-full font-bold text-xl transition-all ${connected ? 'bg-slate-800 text-red-400 hover:bg-slate-700' : 'bg-green-500 text-white hover:bg-green-600'}`}
      >
        {connected ? 'End Session' : 'Start Conversation'}
      </button>
      <p className="text-slate-400 max-w-md text-center">
        Experience real-time, low-latency voice conversation with Gemini 2.5. Speak naturally.
      </p>
    </div>
  );
};

// UI Helper
const Toggle = ({ label, icon: Icon, active, onClick }: any) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${active ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
    <Icon size={14} /> {label}
  </button>
);

export default UltimateAIPage;