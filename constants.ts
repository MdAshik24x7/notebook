import { Globe, Network, Cpu, Code, Terminal, Database, Atom, Zap, Activity, Thermometer, Magnet, Triangle, Component, Layers, Ruler, Beaker, FlaskConical, TestTube, Microscope, Droplets, Dna, Leaf, Bug, Heart, Brain, Flower, Calculator, Grid3x3, Move, Circle, Sigma, Infinity, TrendingUp, Anchor, Dices, Pi, Book, Feather, ScrollText, PenTool, MessageCircle, FileText, Type, Award, Users, AlertTriangle, Sprout, Tractor, Fish, Bird, Trees, Wheat, Scale, Landmark, Gavel, Building, Flag, Coins, Receipt, CreditCard, Briefcase, PieChart, BarChart, Target, Cloud, Clock, Factory, Megaphone, Moon, Map as MapIcon, Radio, Disc, Sun, Wind, Droplet, Cog, Orbit, Binary, Hash, Eye, Lock } from 'lucide-react';
import { Chapter, Language, Subject } from './types';

// Helper components for icons not in Lucide (using closest matches)
const Paw = Bug; 
const ShoppingCart = Briefcase;
const Shield = Lock;

export const SUBJECT_CATEGORIES: { id: 'compulsory' | 'science' | 'business' | 'humanities'; icon: any; subjects: Subject[] }[] = [
  {
    id: 'compulsory',
    icon: Book,
    subjects: ['ict', 'bangla1', 'bangla2', 'english1', 'english2']
  },
  {
    id: 'science',
    icon: Atom,
    subjects: ['physics1', 'physics2', 'chemistry1', 'chemistry2', 'math1', 'math2', 'biology1', 'biology2']
  },
  {
    id: 'business',
    icon: Briefcase,
    subjects: ['accounting1', 'accounting2', 'management1', 'management2', 'finance1', 'finance2', 'marketing1', 'marketing2']
  },
  {
    id: 'humanities',
    icon: Globe,
    subjects: ['economics1', 'economics2', 'civics1', 'civics2', 'socialwork1', 'socialwork2', 'islam1', 'islam2', 'agriculture1', 'agriculture2']
  }
];

// --- ICT SYLLABUS ---
const SYLLABUS_ICT_BN: Chapter[] = [
  {
    id: 'ict_ch1',
    number: '১',
    title: 'বিশ্ব ও বাংলাদেশ প্রেক্ষিত',
    icon: Globe,
    subtopics: [
      { id: 'gv_concept', title: 'বিশ্বগ্রামের ধারণা (Global Village)' },
      { id: 'gv_elements', title: 'বিশ্বগ্রামের উপাদানসমূহ' },
      { id: 'tech_vr', title: 'ভার্চুয়াল রিয়েলিটি (Virtual Reality)' },
      { id: 'tech_ai', title: 'কৃত্রিম বুদ্ধিমত্তা ও রোবোটিক্স' },
      { id: 'tech_cryo', title: 'ক্রায়োসার্জারি (Cryosurgery)' },
      { id: 'tech_bio', title: 'বায়োমেট্রিক্স ও বায়োইনফরমেটিক্স' },
      { id: 'tech_nano', title: 'জেনেটিক ইঞ্জিনিয়ারিং ও ন্যানোটেকনোলজি' },
      { id: 'ethics', title: 'আইসিটি ব্যবহারে নৈতিকতা' },
    ],
  },
  {
    id: 'ict_ch2',
    number: '২',
    title: 'কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং',
    icon: Network,
    subtopics: [
      { id: 'comm_method', title: 'ডেটা ট্রান্সমিশন মেথড ও মোড' },
      { id: 'comm_media', title: 'ট্রান্সমিশন মিডিয়া (তার ও তারবিহীন)' },
      { id: 'wireless', title: 'ওয়্যারলেস কমিউনিকেশন (Mobile, WiFi, WiMax)' },
      { id: 'generations', title: 'মোবাইল প্রজন্ম (1G to 5G)' },
      { id: 'network_type', title: 'কম্পিউটার নেটওয়ার্ক (LAN, MAN, WAN)' },
      { id: 'topology', title: 'নেটওয়ার্ক টপোলজি' },
      { id: 'cloud', title: 'ক্লাউড কম্পিউটিং (Cloud Computing)' },
    ],
  },
  {
    id: 'ict_ch3',
    number: '৩',
    title: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস',
    icon: Cpu,
    subtopics: [
      { id: 'num_sys', title: 'সংখ্যা পদ্ধতি (Binary, Octal, Hex)' },
      { id: 'conversion', title: 'সংখ্যা পদ্ধতির রূপান্তর' },
      { id: 'binary_ops', title: 'বাইনারি যোগ ও ২-এর পরিপূরক' },
      { id: 'codes', title: 'কোড (BCD, ASCII, Unicode)' },
      { id: 'gates', title: 'বুলিয়ান অ্যালজেব্রা ও লজিক গেট' },
      { id: 'circuits', title: 'এনকোডার, ডিকোডার ও অ্যাডার' },
      { id: 'registers', title: 'রেজিস্টার ও কাউন্টার' },
    ],
  },
  {
    id: 'ict_ch4',
    number: '৪',
    title: 'ওয়েব ডিজাইন পরিচিতি এবং HTML',
    icon: Code,
    subtopics: [
      { id: 'web_struct', title: 'ওয়েবসাইটের কাঠামো' },
      { id: 'html_basic', title: 'HTML এর মৌলিক কাঠামো ও ট্যাগ' },
      { id: 'html_format', title: 'টেক্সট ফরম্যাটিং ও লিস্ট' },
      { id: 'html_media', title: 'ছবি ও হাইপারলিংক' },
      { id: 'html_tables', title: 'টেবিল ও লেআউট' },
      { id: 'html_forms', title: 'ফর্ম ও ইনপুট এলিমেন্ট' },
      { id: 'publishing', title: 'ওয়েবসাইট পাবলিশিং' },
    ],
  },
  {
    id: 'ict_ch5',
    number: '৫',
    title: 'প্রোগ্রামিং ভাষা',
    icon: Terminal,
    subtopics: [
      { id: 'prog_concept', title: 'প্রোগ্রামিং ধারণা ও অ্যালগরিদম' },
      { id: 'flowchart', title: 'ফ্লোচার্ট (Flowchart)' },
      { id: 'c_basic', title: 'C ভাষা পরিচিতি' },
      { id: 'c_io', title: 'ডেটা টাইপ, ভেরিয়েবল ও ইনপুট/আউটপুট' },
      { id: 'c_control', title: 'কন্ট্রোল স্টেটমেন্ট (if-else, switch)' },
      { id: 'c_loops', title: 'লুপ কন্ট্রোল (for, while, do-while)' },
      { id: 'c_arrays', title: 'অ্যারে (Arrays)' },
      { id: 'c_funcs', title: 'ফাংশন (Functions)' },
    ],
  },
  {
    id: 'ict_ch6',
    number: '৬',
    title: 'ডেটাবেজ ম্যানেজমেন্ট সিস্টেম',
    icon: Database,
    subtopics: [
      { id: 'db_concept', title: 'ডেটাবেজ ধারণা' },
      { id: 'db_models', title: 'ডেটাবেজ মডেল (Relational)' },
      { id: 'rdbms', title: 'RDBMS ও কী (Primary, Foreign Key)' },
      { id: 'normalization', title: 'নরমালাইজেশন' },
      { id: 'sql_basic', title: 'SQL পরিচিতি (DDL, DML)' },
      { id: 'sql_query', title: 'সর্টিং ও ইনডেক্সিং' },
    ],
  },
];

const SYLLABUS_ICT_EN: Chapter[] = [
  {
    id: 'ict_ch1',
    number: '1',
    title: 'Global Village & Bangladesh Perspective',
    icon: Globe,
    subtopics: [
      { id: 'gv_concept', title: 'Concept of Global Village' },
      { id: 'gv_elements', title: 'Elements of Global Village' },
      { id: 'tech_vr', title: 'Virtual Reality' },
      { id: 'tech_ai', title: 'Artificial Intelligence & Robotics' },
      { id: 'tech_cryo', title: 'Cryosurgery' },
      { id: 'tech_bio', title: 'Biometrics & Bioinformatics' },
      { id: 'tech_nano', title: 'Genetic Engineering & Nanotechnology' },
      { id: 'ethics', title: 'Ethics in ICT Usage' },
    ],
  },
  {
    id: 'ict_ch2',
    number: '2',
    title: 'Communication Systems & Networking',
    icon: Network,
    subtopics: [
      { id: 'comm_method', title: 'Data Transmission Methods & Modes' },
      { id: 'comm_media', title: 'Transmission Media (Guided & Unguided)' },
      { id: 'wireless', title: 'Wireless Communication (Mobile, WiFi, WiMax)' },
      { id: 'generations', title: 'Mobile Generations (1G to 5G)' },
      { id: 'network_type', title: 'Computer Networks (LAN, MAN, WAN)' },
      { id: 'topology', title: 'Network Topologies' },
      { id: 'cloud', title: 'Cloud Computing' },
    ],
  },
  {
    id: 'ict_ch3',
    number: '3',
    title: 'Number Systems & Digital Devices',
    icon: Cpu,
    subtopics: [
      { id: 'num_sys', title: 'Number Systems (Binary, Octal, Hex)' },
      { id: 'conversion', title: 'Number System Conversions' },
      { id: 'binary_ops', title: 'Binary Addition & Subtraction' },
      { id: 'codes', title: 'Codes (BCD, ASCII, Unicode)' },
      { id: 'gates', title: 'Boolean Algebra & Logic Gates' },
      { id: 'circuits', title: 'Encoder, Decoder, Adder' },
      { id: 'registers', title: 'Registers & Counters' },
    ],
  },
  {
    id: 'ict_ch4',
    number: '4',
    title: 'Web Design & HTML',
    icon: Code,
    subtopics: [
      { id: 'web_struct', title: 'Website Structure' },
      { id: 'html_basic', title: 'HTML Basic Structure & Tags' },
      { id: 'html_format', title: 'Text Formatting & Lists' },
      { id: 'html_media', title: 'Images & Hyperlinks' },
      { id: 'html_tables', title: 'Tables & Layouts' },
      { id: 'html_forms', title: 'Forms & Inputs' },
      { id: 'publishing', title: 'Website Publishing' },
    ],
  },
  {
    id: 'ict_ch5',
    number: '5',
    title: 'Programming Language',
    icon: Terminal,
    subtopics: [
      { id: 'prog_concept', title: 'Concept of Programming & Algorithms' },
      { id: 'flowchart', title: 'Flowcharts' },
      { id: 'c_basic', title: 'Introduction to C Language' },
      { id: 'c_io', title: 'Data Types, Variables, I/O' },
      { id: 'c_control', title: 'Control Statements (if-else, switch)' },
      { id: 'c_loops', title: 'Loop Control (for, while, do-while)' },
      { id: 'c_arrays', title: 'Arrays' },
      { id: 'c_funcs', title: 'Functions' },
    ],
  },
  {
    id: 'ict_ch6',
    number: '6',
    title: 'Database Management System',
    icon: Database,
    subtopics: [
      { id: 'db_concept', title: 'Database Concepts (Data vs Info)' },
      { id: 'db_models', title: 'Database Models (Relational)' },
      { id: 'rdbms', title: 'RDBMS & Keys (Primary, Foreign Key)' },
      { id: 'normalization', title: 'Normalization' },
      { id: 'sql_basic', title: 'SQL: DDL & DML' },
      { id: 'sql_query', title: 'Sorting, Indexing & Relationships' },
    ],
  },
];

// --- PHYSICS 1ST PAPER ---
const SYLLABUS_PHY1_BN: Chapter[] = [
  { id: 'phy1_ch1', number: '১', title: 'ভৌত জগৎ ও পরিমাপ', icon: Ruler, subtopics: [{ id: 'phy1_1_1', title: 'পরিমাপের ত্রুটি' }, { id: 'phy1_1_2', title: 'ভার্নিয়ার স্কেল ও স্ক্রু গেজ' }] },
  { id: 'phy1_ch2', number: '২', title: 'ভেক্টর', icon: Move, subtopics: [{ id: 'phy1_2_1', title: 'ভেক্টর যোগ ও বিয়োগ' }, { id: 'phy1_2_2', title: 'ডট গুণন ও ক্রস গুণন' }, { id: 'phy1_2_3', title: 'ভেক্টর ক্যালকুলাস' }] },
  { id: 'phy1_ch3', number: '৩', title: 'গতিবিদ্যা', icon: Activity, subtopics: [{ id: 'phy1_3_1', title: 'প্রাস (Projectile)' }, { id: 'phy1_3_2', title: 'বৃত্তাকার গতি' }] },
  { id: 'phy1_ch4', number: '৪', title: 'নিউটনিয়ান বলবিদ্যা', icon: Anchor, subtopics: [{ id: 'phy1_4_1', title: 'নিউটনের গতিসূত্র' }, { id: 'phy1_4_2', title: 'ঘর্ষণ ও ব্যাংকিং কোণ' }, { id: 'phy1_4_3', title: 'জড়তার ভ্রামক' }] },
  { id: 'phy1_ch5', number: '৫', title: 'কাজ, শক্তি ও ক্ষমতা', icon: Zap, subtopics: [{ id: 'phy1_5_1', title: 'কাজ ও শক্তি উপপাদ্য' }, { id: 'phy1_5_2', title: 'শক্তির নিত্যতা' }, { id: 'phy1_5_3', title: 'ক্ষমতা ও কর্মদক্ষতা' }] },
  { id: 'phy1_ch6', number: '৬', title: 'মহাকর্ষ ও অভিকর্ষ', icon: Globe, subtopics: [{ id: 'phy1_6_1', title: 'কেপলারের সূত্র' }, { id: 'phy1_6_2', title: 'g এর মানের পরিবর্তন' }, { id: 'phy1_6_3', title: 'মুক্তিবেগ ও উপগ্রহ' }] },
  { id: 'phy1_ch7', number: '৭', title: 'পদার্থের গাঠনিক ধর্ম', icon: Layers, subtopics: [{ id: 'phy1_7_1', title: 'স্থিতিস্থাপকতা ও হুকের সূত্র' }, { id: 'phy1_7_2', title: 'সান্দ্রতা ও স্টোকসের সূত্র' }, { id: 'phy1_7_3', title: 'পৃষ্ঠটান' }] },
  { id: 'phy1_ch8', number: '৮', title: 'পর্যায়বৃত্ত গতি', icon: Clock, subtopics: [{ id: 'phy1_8_1', title: 'সরল দোলক' }, { id: 'phy1_8_2', title: 'সরল ছন্দিত স্পন্দন (SHM)' }] },
  { id: 'phy1_ch9', number: '৯', title: 'তরঙ্গ', icon: Radio, subtopics: [{ id: 'phy1_9_1', title: 'অগ্রগামী তরঙ্গ' }, { id: 'phy1_9_2', title: 'স্থির তরঙ্গ' }, { id: 'phy1_9_3', title: 'শব্দ ও বিট' }] },
  { id: 'phy1_ch10', number: '১০', title: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব', icon: Wind, subtopics: [{ id: 'phy1_10_1', title: 'বয়েল ও চার্লসের সূত্র' }, { id: 'phy1_10_2', title: 'আদর্শ গ্যাস সমীকরণ' }, { id: 'phy1_10_3', title: 'গড় বর্গবেগ ও আপেক্ষিক আর্দ্রতা' }] }
];
const SYLLABUS_PHY1_EN: Chapter[] = [
  { id: 'phy1_ch1', number: '1', title: 'Physical World & Measurement', icon: Ruler, subtopics: [{ id: 'phy1_1_1', title: 'Measurement Errors' }, { id: 'phy1_1_2', title: 'Vernier Scale & Screw Gauge' }] },
  { id: 'phy1_ch2', number: '2', title: 'Vector', icon: Move, subtopics: [{ id: 'phy1_2_1', title: 'Vector Addition & Subtraction' }, { id: 'phy1_2_2', title: 'Dot Product & Cross Product' }, { id: 'phy1_2_3', title: 'Vector Calculus' }] },
  { id: 'phy1_ch3', number: '3', title: 'Dynamics', icon: Activity, subtopics: [{ id: 'phy1_3_1', title: 'Projectile Motion' }, { id: 'phy1_3_2', title: 'Circular Motion' }] },
  { id: 'phy1_ch4', number: '4', title: 'Newtonian Mechanics', icon: Anchor, subtopics: [{ id: 'phy1_4_1', title: 'Newton\'s Laws' }, { id: 'phy1_4_2', title: 'Friction & Banking' }, { id: 'phy1_4_3', title: 'Moment of Inertia' }] },
  { id: 'phy1_ch5', number: '5', title: 'Work, Energy & Power', icon: Zap, subtopics: [{ id: 'phy1_5_1', title: 'Work-Energy Theorem' }, { id: 'phy1_5_2', title: 'Conservation of Energy' }, { id: 'phy1_5_3', title: 'Power & Efficiency' }] },
  { id: 'phy1_ch6', number: '6', title: 'Gravitation', icon: Globe, subtopics: [{ id: 'phy1_6_1', title: 'Kepler\'s Laws' }, { id: 'phy1_6_2', title: 'Variation of g' }, { id: 'phy1_6_3', title: 'Escape Velocity & Satellites' }] },
  { id: 'phy1_ch7', number: '7', title: 'Structural Properties of Matter', icon: Layers, subtopics: [{ id: 'phy1_7_1', title: 'Elasticity & Hooke\'s Law' }, { id: 'phy1_7_2', title: 'Viscosity' }, { id: 'phy1_7_3', title: 'Surface Tension' }] },
  { id: 'phy1_ch8', number: '8', title: 'Periodic Motion', icon: Clock, subtopics: [{ id: 'phy1_8_1', title: 'Simple Pendulum' }, { id: 'phy1_8_2', title: 'Simple Harmonic Motion (SHM)' }] },
  { id: 'phy1_ch9', number: '9', title: 'Waves', icon: Radio, subtopics: [{ id: 'phy1_9_1', title: 'Progressive Waves' }, { id: 'phy1_9_2', title: 'Stationary Waves' }, { id: 'phy1_9_3', title: 'Sound & Beats' }] },
  { id: 'phy1_ch10', number: '10', title: 'Ideal Gas & Kinetic Theory', icon: Wind, subtopics: [{ id: 'phy1_10_1', title: 'Gas Laws' }, { id: 'phy1_10_2', title: 'Ideal Gas Equation' }, { id: 'phy1_10_3', title: 'RMS Velocity & Humidity' }] }
];

// --- PHYSICS 2ND PAPER ---
const SYLLABUS_PHY2_BN: Chapter[] = [
  { id: 'phy2_ch1', number: '১', title: 'তাপগতিবিদ্যা', icon: Thermometer, subtopics: [{ id: 'phy2_1_1', title: 'তাপগতিবিদ্যার সূত্রসমূহ' }, { id: 'phy2_1_2', title: 'এন্ট্রপি ও কার্নো ইঞ্জিন' }] },
  { id: 'phy2_ch2', number: '২', title: 'স্থির তড়িৎ', icon: Zap, subtopics: [{ id: 'phy2_2_1', title: 'কুলম্বের সূত্র ও তড়িৎ প্রাবল্য' }, { id: 'phy2_2_2', title: 'গাউসের সূত্র' }, { id: 'phy2_2_3', title: 'ধারক' }] },
  { id: 'phy2_ch3', number: '৩', title: 'চল তড়িৎ', icon: Zap, subtopics: [{ id: 'phy2_3_1', title: 'ওহমের সূত্র ও রোধ' }, { id: 'phy2_3_2', title: 'কারশফের সূত্র (KCL & KVL)' }, { id: 'phy2_3_3', title: 'হুইটস্টোন ব্রিজ ও পটেনশিওমিটার' }] },
  { id: 'phy2_ch4', number: '৪', title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া', icon: Magnet, subtopics: [{ id: 'phy2_4_1', title: 'বায়ো-সাভার্ট সূত্র' }, { id: 'phy2_4_2', title: 'হল প্রভাব (Hall Effect)' }] },
  { id: 'phy2_ch5', number: '৫', title: 'তাড়িতচৌম্বক আবেশ', icon: Magnet, subtopics: [{ id: 'phy2_5_1', title: 'ফ্যারাডের সূত্র' }, { id: 'phy2_5_2', title: 'ট্রান্সফরমার' }] },
  { id: 'phy2_ch6', number: '৬', title: 'জ্যামিতিক আলোকবিজ্ঞান', icon: Sun, subtopics: [{ id: 'phy2_6_1', title: 'প্রিজম ও লেন্স' }, { id: 'phy2_6_2', title: 'অণুবীক্ষণ ও দূরবীক্ষণ যন্ত্র' }] },
  { id: 'phy2_ch7', number: '৭', title: 'ভৌত আলোকবিজ্ঞান', icon: Sun, subtopics: [{ id: 'phy2_7_1', title: 'হাইগেনসের নীতি' }, { id: 'phy2_7_2', title: 'ব্যতিচার ও অপবর্তন' }] },
  { id: 'phy2_ch8', number: '৮', title: 'আধুনিক পদার্থবিজ্ঞান', icon: Atom, subtopics: [{ id: 'phy2_8_1', title: 'আপেক্ষিকতা তত্ত্ব' }, { id: 'phy2_8_2', title: 'ফটোতড়িৎ ক্রিয়া ও এক্স-রে' }] },
  { id: 'phy2_ch9', number: '৯', title: 'পরমাণুর মডেল', icon: Orbit, subtopics: [{ id: 'phy2_9_1', title: 'বোর মডেল' }, { id: 'phy2_9_2', title: 'তেজস্ক্রিয়তা' }] },
  { id: 'phy2_ch10', number: '১০', title: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স', icon: Cpu, subtopics: [{ id: 'phy2_10_1', title: 'পি-এন জংশন ও ডায়োড' }, { id: 'phy2_10_2', title: 'ট্রানজিস্টর ও লজিক গেট' }] }
];
const SYLLABUS_PHY2_EN: Chapter[] = [
  { id: 'phy2_ch1', number: '1', title: 'Thermodynamics', icon: Thermometer, subtopics: [{ id: 'phy2_1_1', title: 'Laws of Thermodynamics' }, { id: 'phy2_1_2', title: 'Entropy & Carnot Engine' }] },
  { id: 'phy2_ch2', number: '2', title: 'Static Electricity', icon: Zap, subtopics: [{ id: 'phy2_2_1', title: 'Coulomb\'s Law & Field' }, { id: 'phy2_2_2', title: 'Gauss\'s Law' }, { id: 'phy2_2_3', title: 'Capacitors' }] },
  { id: 'phy2_ch3', number: '3', title: 'Current Electricity', icon: Zap, subtopics: [{ id: 'phy2_3_1', title: 'Ohm\'s Law & Resistance' }, { id: 'phy2_3_2', title: 'Kirchhoff\'s Laws' }, { id: 'phy2_3_3', title: 'Wheatstone Bridge' }] },
  { id: 'phy2_ch4', number: '4', title: 'Magnetic Effects of Current', icon: Magnet, subtopics: [{ id: 'phy2_4_1', title: 'Biot-Savart Law' }, { id: 'phy2_4_2', title: 'Hall Effect' }] },
  { id: 'phy2_ch5', number: '5', title: 'Electromagnetic Induction', icon: Magnet, subtopics: [{ id: 'phy2_5_1', title: 'Faraday\'s Laws' }, { id: 'phy2_5_2', title: 'Transformer' }] },
  { id: 'phy2_ch6', number: '6', title: 'Geometrical Optics', icon: Sun, subtopics: [{ id: 'phy2_6_1', title: 'Prism & Lens' }, { id: 'phy2_6_2', title: 'Microscope & Telescope' }] },
  { id: 'phy2_ch7', number: '7', title: 'Physical Optics', icon: Sun, subtopics: [{ id: 'phy2_7_1', title: 'Huygens\' Principle' }, { id: 'phy2_7_2', title: 'Interference & Diffraction' }] },
  { id: 'phy2_ch8', number: '8', title: 'Modern Physics', icon: Atom, subtopics: [{ id: 'phy2_8_1', title: 'Relativity' }, { id: 'phy2_8_2', title: 'Photoelectric Effect' }] },
  { id: 'phy2_ch9', number: '9', title: 'Atomic Model', icon: Orbit, subtopics: [{ id: 'phy2_9_1', title: 'Bohr Model' }, { id: 'phy2_9_2', title: 'Radioactivity' }] },
  { id: 'phy2_ch10', number: '10', title: 'Semiconductor & Electronics', icon: Cpu, subtopics: [{ id: 'phy2_10_1', title: 'PN Junction & Diode' }, { id: 'phy2_10_2', title: 'Transistor & Logic Gates' }] }
];

// --- CHEMISTRY 1ST PAPER ---
const SYLLABUS_CHEM1_BN: Chapter[] = [
  { id: 'chem1_ch1', number: '১', title: 'ল্যাবরেটরির নিরাপদ ব্যবহার', icon: FlaskConical, subtopics: [{ id: 'chem1_1_1', title: 'নিরাপদ গ্লাসওয়্যার ও রাসায়নিক ব্যবহার' }, { id: 'chem1_1_2', title: 'প্রাথমিক চিকিৎসা ও বর্জ্য ব্যবস্থাপনা' }] },
  { id: 'chem1_ch2', number: '২', title: 'গুণগত রসায়ন', icon: TestTube, subtopics: [{ id: 'chem1_2_1', title: 'রাদারফোর্ড ও বোর মডেল' }, { id: 'chem1_2_2', title: 'কোয়ান্টাম সংখ্যা' }, { id: 'chem1_2_3', title: 'দ্রাব্যতা ও দ্রাব্যতা গুণফল' }] },
  { id: 'chem1_ch3', number: '৩', title: 'মৌলের পর্যায়বৃত্ত ধর্ম', icon: Atom, subtopics: [{ id: 'chem1_3_1', title: 'ইলেকট্রন বিন্যাস ও পর্যায় সারণি' }, { id: 'chem1_3_2', title: 'আয়নীকরণ শক্তি ও তড়িৎ ঋণাত্মকতা' }, { id: 'chem1_3_3', title: 'সংকরায়ন (Hybridization)' }] },
  { id: 'chem1_ch4', number: '৪', title: 'রাসায়নিক পরিবর্তন', icon: Activity, subtopics: [{ id: 'chem1_4_1', title: 'রাসায়নিক সাম্যাবস্থা' }, { id: 'chem1_4_2', title: 'pH ও বাফার দ্রবণ' }, { id: 'chem1_4_3', title: 'বিক্রিয়ার তাপ (Enthalpy)' }] },
  { id: 'chem1_ch5', number: '৫', title: 'কর্মমুখী রসায়ন', icon: Factory, subtopics: [{ id: 'chem1_5_1', title: 'খাদ্য নিরাপত্তা ও প্রিজারভেটিভস' }, { id: 'chem1_5_2', title: 'ভিনেগার প্রস্তুতি ও ব্যবহার' }] }
];
const SYLLABUS_CHEM1_EN: Chapter[] = [
  { id: 'chem1_ch1', number: '1', title: 'Safe Use of Laboratory', icon: FlaskConical, subtopics: [{ id: 'chem1_1_1', title: 'Safe Glassware & Chemical Use' }, { id: 'chem1_1_2', title: 'First Aid & Waste Management' }] },
  { id: 'chem1_ch2', number: '2', title: 'Qualitative Chemistry', icon: TestTube, subtopics: [{ id: 'chem1_2_1', title: 'Rutherford & Bohr Model' }, { id: 'chem1_2_2', title: 'Quantum Numbers' }, { id: 'chem1_2_3', title: 'Solubility Product' }] },
  { id: 'chem1_ch3', number: '3', title: 'Periodic Properties', icon: Atom, subtopics: [{ id: 'chem1_3_1', title: 'Electron Config & Periodic Table' }, { id: 'chem1_3_2', title: 'Ionization Energy' }, { id: 'chem1_3_3', title: 'Hybridization' }] },
  { id: 'chem1_ch4', number: '4', title: 'Chemical Changes', icon: Activity, subtopics: [{ id: 'chem1_4_1', title: 'Chemical Equilibrium' }, { id: 'chem1_4_2', title: 'pH & Buffer Solution' }, { id: 'chem1_4_3', title: 'Enthalpy' }] },
  { id: 'chem1_ch5', number: '5', title: 'Work-oriented Chemistry', icon: Factory, subtopics: [{ id: 'chem1_5_1', title: 'Food Safety & Preservatives' }, { id: 'chem1_5_2', title: 'Vinegar Preparation' }] }
];

// --- CHEMISTRY 2ND PAPER ---
const SYLLABUS_CHEM2_BN: Chapter[] = [
  { id: 'chem2_ch1', number: '১', title: 'পরিবেশ রসায়ন', icon: Globe, subtopics: [{ id: 'chem2_1_1', title: 'গ্যাসের সূত্রসমূহ' }, { id: 'chem2_1_2', title: 'এসিড-বৃষ্টি ও গ্রিনহাউজ প্রভাব' }, { id: 'chem2_1_3', title: 'পানি দূষণ ও বিওডি/সিওডি' }] },
  { id: 'chem2_ch2', number: '২', title: 'জৈব রসায়ন', icon: Beaker, subtopics: [{ id: 'chem2_2_1', title: 'সমগোত্রীয় শ্রেণী ও নামকরণ' }, { id: 'chem2_2_2', title: 'অ্যালকেন, অ্যালকিন, অ্যালকাইন' }, { id: 'chem2_2_3', title: 'অ্যারোমেটিক হাইড্রোকার্বন ও বেনজিন' }, { id: 'chem2_2_4', title: 'অ্যালকোহল, অ্যালডিহাইড ও কিটোন' }] },
  { id: 'chem2_ch3', number: '৩', title: 'পরিমাণগত রসায়ন', icon: Scale, subtopics: [{ id: 'chem2_3_1', title: 'মোলার ঘনমাত্রা' }, { id: 'chem2_3_2', title: 'টাইট্রেসন ও নির্দেশক' }, { id: 'chem2_3_3', title: 'জারণ-বিজারণ' }] },
  { id: 'chem2_ch4', number: '৪', title: 'তড়িৎ রসায়ন', icon: Zap, subtopics: [{ id: 'chem2_4_1', title: 'ফ্যারাডের সূত্র' }, { id: 'chem2_4_2', title: 'তড়িৎ রাসায়নিক কোষ (গ্যালভানি)' }] },
  { id: 'chem2_ch5', number: '৫', title: 'অর্থনৈতিক রসায়ন', icon: Coins, subtopics: [{ id: 'chem2_5_1', title: 'প্রাকৃতিক গ্যাস ও কয়লা' }, { id: 'chem2_5_2', title: 'কাগজ ও সিমেন্ট শিল্প' }] }
];
const SYLLABUS_CHEM2_EN: Chapter[] = [
  { id: 'chem2_ch1', number: '1', title: 'Environmental Chemistry', icon: Globe, subtopics: [{ id: 'chem2_1_1', title: 'Gas Laws' }, { id: 'chem2_1_2', title: 'Greenhouse Effect' }, { id: 'chem2_1_3', title: 'Water Pollution (BOD/COD)' }] },
  { id: 'chem2_ch2', number: '2', title: 'Organic Chemistry', icon: Beaker, subtopics: [{ id: 'chem2_2_1', title: 'Nomenclature' }, { id: 'chem2_2_2', title: 'Aliphatic Hydrocarbons' }, { id: 'chem2_2_3', title: 'Aromatic Hydrocarbons' }, { id: 'chem2_2_4', title: 'Alcohol, Aldehyde & Ketone' }] },
  { id: 'chem2_ch3', number: '3', title: 'Quantitative Chemistry', icon: Scale, subtopics: [{ id: 'chem2_3_1', title: 'Molarity' }, { id: 'chem2_3_2', title: 'Titration' }, { id: 'chem2_3_3', title: 'Redox Reactions' }] },
  { id: 'chem2_ch4', number: '4', title: 'Electrochemistry', icon: Zap, subtopics: [{ id: 'chem2_4_1', title: 'Faraday\'s Laws' }, { id: 'chem2_4_2', title: 'Electrochemical Cells' }] },
  { id: 'chem2_ch5', number: '5', title: 'Economic Chemistry', icon: Coins, subtopics: [{ id: 'chem2_5_1', title: 'Natural Gas & Coal' }, { id: 'chem2_5_2', title: 'Paper & Cement Industry' }] }
];

// --- BIOLOGY 1ST PAPER ---
const SYLLABUS_BIO1_BN: Chapter[] = [
  { id: 'bio1_ch1', number: '১', title: 'কোষ ও এর গঠন', icon: Microscope, subtopics: [{ id: 'bio1_1_1', title: 'কোষ প্রাচীর ও কোষ ঝিল্লি' }, { id: 'bio1_1_2', title: 'ডিএনএ ও আরএনএ' }] },
  { id: 'bio1_ch2', number: '২', title: 'কোষ বিভাজন', icon: Component, subtopics: [{ id: 'bio1_2_1', title: 'মাইটোসিস' }, { id: 'bio1_2_2', title: 'মিয়োসিস ও ক্রসিং ওভার' }] },
  { id: 'bio1_ch3', number: '৩', title: 'কোষ রসায়ন', icon: Beaker, subtopics: [{ id: 'bio1_3_1', title: 'কার্বোহাইড্রেট' }, { id: 'bio1_3_2', title: 'অ্যামিনো এসিড ও প্রোটিন' }] },
  { id: 'bio1_ch4', number: '৪', title: 'অণুজীব', icon: Bug, subtopics: [{ id: 'bio1_4_1', title: 'ভাইরাস' }, { id: 'bio1_4_2', title: 'ব্যাকটেরিয়া' }] },
  { id: 'bio1_ch7', number: '৭', title: 'নগ্নবীজী ও আবৃতবীজী', icon: Flower, subtopics: [{ id: 'bio1_7_1', title: 'নগ্নবীজী উদ্ভিদ' }, { id: 'bio1_7_2', title: 'গোত্র পরিচিতি (Poaceae & Malvaceae)' }] },
  { id: 'bio1_ch8', number: '৮', title: 'টিস্যু ও টিস্যুতন্ত্র', icon: Layers, subtopics: [{ id: 'bio1_8_1', title: 'ভাজক টিস্যু' }, { id: 'bio1_8_2', title: 'ভাস্কুলার বান্ডল' }] },
  { id: 'bio1_ch9', number: '৯', title: 'উদ্ভিদ শরীরতত্ত্ব', icon: Leaf, subtopics: [{ id: 'bio1_9_1', title: 'খনিজ লবণ পরিশোষণ' }, { id: 'bio1_9_2', title: 'সালোকসংশ্লেষণ' }, { id: 'bio1_9_3', title: 'শ্বসন' }] },
  { id: 'bio1_ch10', number: '১০', title: 'উদ্ভিদ প্রজনন', icon: Sprout, subtopics: [{ id: 'bio1_10_1', title: 'নিষেক' }, { id: 'bio1_10_2', title: 'কৃত্রিম প্রজনন' }] },
  { id: 'bio1_ch11', number: '১১', title: 'জীবপ্রযুক্তি', icon: Dna, subtopics: [{ id: 'bio1_11_1', title: 'টিস্যু কালচার' }, { id: 'bio1_11_2', title: 'রিকম্বিনেন্ট ডিএনএ প্রযুক্তি' }] }
];
const SYLLABUS_BIO1_EN: Chapter[] = [
  { id: 'bio1_ch1', number: '1', title: 'Cell & Structure', icon: Microscope, subtopics: [{ id: 'bio1_1_1', title: 'Cell Wall & Membrane' }, { id: 'bio1_1_2', title: 'DNA & RNA' }] },
  { id: 'bio1_ch2', number: '2', title: 'Cell Division', icon: Component, subtopics: [{ id: 'bio1_2_1', title: 'Mitosis' }, { id: 'bio1_2_2', title: 'Meiosis & Crossing Over' }] },
  { id: 'bio1_ch3', number: '3', title: 'Cell Chemistry', icon: Beaker, subtopics: [{ id: 'bio1_3_1', title: 'Carbohydrates' }, { id: 'bio1_3_2', title: 'Proteins' }] },
  { id: 'bio1_ch4', number: '4', title: 'Microorganisms', icon: Bug, subtopics: [{ id: 'bio1_4_1', title: 'Virus' }, { id: 'bio1_4_2', title: 'Bacteria' }] },
  { id: 'bio1_ch7', number: '7', title: 'Gymnosperms & Angiosperms', icon: Flower, subtopics: [{ id: 'bio1_7_1', title: 'Gymnosperms' }, { id: 'bio1_7_2', title: 'Family (Poaceae & Malvaceae)' }] },
  { id: 'bio1_ch8', number: '8', title: 'Tissue System', icon: Layers, subtopics: [{ id: 'bio1_8_1', title: 'Meristematic Tissue' }, { id: 'bio1_8_2', title: 'Vascular Bundle' }] },
  { id: 'bio1_ch9', number: '9', title: 'Plant Physiology', icon: Leaf, subtopics: [{ id: 'bio1_9_1', title: 'Mineral Absorption' }, { id: 'bio1_9_2', title: 'Photosynthesis' }, { id: 'bio1_9_3', title: 'Respiration' }] },
  { id: 'bio1_ch10', number: '10', title: 'Plant Reproduction', icon: Sprout, subtopics: [{ id: 'bio1_10_1', title: 'Fertilization' }, { id: 'bio1_10_2', title: 'Artificial Hybridization' }] },
  { id: 'bio1_ch11', number: '11', title: 'Biotechnology', icon: Dna, subtopics: [{ id: 'bio1_11_1', title: 'Tissue Culture' }, { id: 'bio1_11_2', title: 'Recombinant DNA' }] }
];

// --- BIOLOGY 2ND PAPER ---
const SYLLABUS_BIO2_BN: Chapter[] = [
  { id: 'bio2_ch1', number: '১', title: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস', icon: Dna, subtopics: [{ id: 'bio2_1_1', title: 'শ্রেণিবিন্যাসের ভিত্তি' }, { id: 'bio2_1_2', title: 'কর্ডাটা পর্ব' }] },
  { id: 'bio2_ch2', number: '২', title: 'প্রাণীর পরিচিতি', icon: Fish, subtopics: [{ id: 'bio2_2_1', title: 'হাইড্রা' }, { id: 'bio2_2_2', title: 'রুই মাছ' }, { id: 'bio2_2_3', title: 'ঘাসফড়িং' }] },
  { id: 'bio2_ch3', number: '৩', title: 'পরিপাক ও শোষণ', icon: Activity, subtopics: [{ id: 'bio2_3_1', title: 'খাদ্য পরিপাক' }, { id: 'bio2_3_2', title: 'যকৃত ও অগ্ন্যাশয়' }] },
  { id: 'bio2_ch4', number: '৪', title: 'রক্ত ও সঞ্চালন', icon: Heart, subtopics: [{ id: 'bio2_4_1', title: 'হৃৎপিণ্ডের গঠন' }, { id: 'bio2_4_2', title: 'রক্ত তঞ্চন ও ব্লাড গ্রুপ' }] },
  { id: 'bio2_ch5', number: '৫', title: 'শ্বাসক্রিয়া ও শ্বসন', icon: Wind, subtopics: [{ id: 'bio2_5_1', title: 'গ্যাসীয় বিনিময়' }, { id: 'bio2_5_2', title: 'শ্বসনতন্ত্রের রোগ' }] },
  { id: 'bio2_ch6', number: '৬', title: 'বর্জ্য ও নিষ্কাশন', icon: Droplet, subtopics: [{ id: 'bio2_6_1', title: 'বৃক্কের গঠন ও কাজ' }, { id: 'bio2_6_2', title: 'অসমোরেগুলেশন' }] },
  { id: 'bio2_ch7', number: '৭', title: 'চলন ও অঙ্গচালনা', icon: Move, subtopics: [{ id: 'bio2_7_1', title: 'কঙ্কালতন্ত্র' }, { id: 'bio2_7_2', title: 'পেশি টিস্যু' }] },
  { id: 'bio2_ch8', number: '৮', title: 'সমন্বয় ও নিয়ন্ত্রণ', icon: Brain, subtopics: [{ id: 'bio2_8_1', title: 'মস্তিষ্ক ও স্নায়ুতন্ত্র' }, { id: 'bio2_8_2', title: 'হরমোন' }] },
  { id: 'bio2_ch11', number: '১১', title: 'জিনতত্ত্ব ও বিবর্তন', icon: Dna, subtopics: [{ id: 'bio2_11_1', title: 'মেন্ডেলের সূত্র' }, { id: 'bio2_11_2', title: 'সেক্স লিংকড ডিসঅর্ডার' }] }
];
const SYLLABUS_BIO2_EN: Chapter[] = [
  { id: 'bio2_ch1', number: '1', title: 'Animal Diversity', icon: Dna, subtopics: [{ id: 'bio2_1_1', title: 'Basis of Classification' }, { id: 'bio2_1_2', title: 'Chordata' }] },
  { id: 'bio2_ch2', number: '2', title: 'Introduction to Animal', icon: Fish, subtopics: [{ id: 'bio2_2_1', title: 'Hydra' }, { id: 'bio2_2_2', title: 'Labeo rohita' }, { id: 'bio2_2_3', title: 'Grasshopper' }] },
  { id: 'bio2_ch3', number: '3', title: 'Digestion & Absorption', icon: Activity, subtopics: [{ id: 'bio2_3_1', title: 'Digestion Process' }, { id: 'bio2_3_2', title: 'Liver & Pancreas' }] },
  { id: 'bio2_ch4', number: '4', title: 'Blood & Circulation', icon: Heart, subtopics: [{ id: 'bio2_4_1', title: 'Heart Structure' }, { id: 'bio2_4_2', title: 'Blood Clotting & Groups' }] },
  { id: 'bio2_ch5', number: '5', title: 'Respiration', icon: Wind, subtopics: [{ id: 'bio2_5_1', title: 'Gaseous Exchange' }, { id: 'bio2_5_2', title: 'Respiratory Diseases' }] },
  { id: 'bio2_ch6', number: '6', title: 'Excretion', icon: Droplet, subtopics: [{ id: 'bio2_6_1', title: 'Kidney Structure' }, { id: 'bio2_6_2', title: 'Osmoregulation' }] },
  { id: 'bio2_ch7', number: '7', title: 'Locomotion', icon: Move, subtopics: [{ id: 'bio2_7_1', title: 'Skeletal System' }, { id: 'bio2_7_2', title: 'Muscles' }] },
  { id: 'bio2_ch8', number: '8', title: 'Coordination', icon: Brain, subtopics: [{ id: 'bio2_8_1', title: 'Brain & Nervous System' }, { id: 'bio2_8_2', title: 'Hormones' }] },
  { id: 'bio2_ch11', number: '11', title: 'Genetics & Evolution', icon: Dna, subtopics: [{ id: 'bio2_11_1', title: 'Mendel\'s Laws' }, { id: 'bio2_11_2', title: 'Sex Linked Disorders' }] }
];

// --- MATH 1ST PAPER ---
const SYLLABUS_MATH1_BN: Chapter[] = [
  { id: 'math1_ch1', number: '১', title: 'ম্যাট্রিক্স ও নির্ণায়ক', icon: Grid3x3, subtopics: [{ id: 'math1_1_1', title: 'ম্যাট্রিক্সের প্রকারভেদ ও গুণ' }, { id: 'math1_1_2', title: 'নির্ণায়কের ধর্মাবলি ও ক্রেমারের নিয়ম' }] },
  { id: 'math1_ch2', number: '২', title: 'ভেক্টর', icon: Move, subtopics: [{ id: 'math1_2_1', title: 'ভেক্টর গুণন' }, { id: 'math1_2_2', title: 'ভেক্টর ক্যালকুলাস' }] },
  { id: 'math1_ch3', number: '৩', title: 'সরলরেখা', icon: Ruler, subtopics: [{ id: 'math1_3_1', title: 'স্থানাঙ্ক জ্যামিতি' }, { id: 'math1_3_2', title: 'সরলরেখার ঢাল ও সমীকরণ' }] },
  { id: 'math1_ch4', number: '৪', title: 'বৃত্ত', icon: Circle, subtopics: [{ id: 'math1_4_1', title: 'বৃত্তের সমীকরণ' }, { id: 'math1_4_2', title: 'স্পর্শক ও অভিলম্ব' }] },
  { id: 'math1_ch5', number: '৫', title: 'বিন্যাস ও সমাবেশ', icon: Dices, subtopics: [{ id: 'math1_5_1', title: 'বিন্যাস (Permutation)' }, { id: 'math1_5_2', title: 'সমাবেশ (Combination)' }] },
  { id: 'math1_ch6', number: '৬', title: 'ত্রিকোণমিতিক অনুপাত', icon: Triangle, subtopics: [{ id: 'math1_6_1', title: 'সংযুক্ত কোণ' }, { id: 'math1_6_2', title: 'ত্রিভুজের ধর্ম' }] },
  { id: 'math1_ch7', number: '৭', title: 'সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত', icon: Triangle, subtopics: [{ id: 'math1_7_1', title: 'জটিল ত্রিকোণমিতিক সমস্যা' }] },
  { id: 'math1_ch9', number: '৯', title: 'অন্তরীকরণ (Differentiation)', icon: TrendingUp, subtopics: [{ id: 'math1_9_1', title: 'লিমিট ও অবিচ্ছিন্নতা' }, { id: 'math1_9_2', title: 'মূল নিয়মে অন্তরীকরণ' }, { id: 'math1_9_3', title: 'চরম মান (Maxima/Minima)' }] },
  { id: 'math1_ch10', number: '১০', title: 'যোগজীকরণ (Integration)', icon: Sigma, subtopics: [{ id: 'math1_10_1', title: 'অনির্দিষ্ট যোগজ' }, { id: 'math1_10_2', title: 'নির্দিষ্ট যোগজ ও ক্ষেত্রফল' }] }
];
const SYLLABUS_MATH1_EN: Chapter[] = [
  { id: 'math1_ch1', number: '1', title: 'Matrices & Determinants', icon: Grid3x3, subtopics: [{ id: 'math1_1_1', title: 'Matrix Ops' }, { id: 'math1_1_2', title: 'Cramer\'s Rule' }] },
  { id: 'math1_ch2', number: '2', title: 'Vectors', icon: Move, subtopics: [{ id: 'math1_2_1', title: 'Vector Product' }, { id: 'math1_2_2', title: 'Calculus' }] },
  { id: 'math1_ch3', number: '3', title: 'Straight Lines', icon: Ruler, subtopics: [{ id: 'math1_3_1', title: 'Coordinates' }, { id: 'math1_3_2', title: 'Equation of Lines' }] },
  { id: 'math1_ch4', number: '4', title: 'Circle', icon: Circle, subtopics: [{ id: 'math1_4_1', title: 'Equation of Circle' }, { id: 'math1_4_2', title: 'Tangent' }] },
  { id: 'math1_ch5', number: '5', title: 'Permutation & Combination', icon: Dices, subtopics: [{ id: 'math1_5_1', title: 'Permutation' }, { id: 'math1_5_2', title: 'Combination' }] },
  { id: 'math1_ch6', number: '6', title: 'Trigonometry', icon: Triangle, subtopics: [{ id: 'math1_6_1', title: 'Compound Angles' }, { id: 'math1_6_2', title: 'Properties of Triangles' }] },
  { id: 'math1_ch9', number: '9', title: 'Differentiation', icon: TrendingUp, subtopics: [{ id: 'math1_9_1', title: 'Limits' }, { id: 'math1_9_2', title: 'Derivatives' }, { id: 'math1_9_3', title: 'Maxima & Minima' }] },
  { id: 'math1_ch10', number: '10', title: 'Integration', icon: Sigma, subtopics: [{ id: 'math1_10_1', title: 'Indefinite Integral' }, { id: 'math1_10_2', title: 'Definite Integral & Area' }] }
];

// --- MATH 2ND PAPER ---
const SYLLABUS_MATH2_BN: Chapter[] = [
  { id: 'math2_ch1', number: '১', title: 'বাস্তব সংখ্যা ও অসমতা', icon: Binary, subtopics: [{ id: 'math2_1_1', title: 'বাস্তব সংখ্যা' }, { id: 'math2_1_2', title: 'অসমতার সমাধান' }] },
  { id: 'math2_ch3', number: '৩', title: 'জটিল সংখ্যা', icon: Sigma, subtopics: [{ id: 'math2_3_1', title: 'মডুলাস ও আর্গুমেন্ট' }, { id: 'math2_3_2', title: 'এককের ঘনমূল' }] },
  { id: 'math2_ch4', number: '৪', title: 'বহুপদী ও বহুপদী সমীকরণ', icon: Calculator, subtopics: [{ id: 'math2_4_1', title: 'দ্বিঘাত সমীকরণের মূল' }, { id: 'math2_4_2', title: 'মূল ও সহগের সম্পর্ক' }] },
  { id: 'math2_ch5', number: '৫', title: 'দ্বিপদী বিস্তৃতি', icon: Hash, subtopics: [{ id: 'math2_5_1', title: 'প্যাসকেলের ত্রিভুজ' }, { id: 'math2_5_2', title: 'সাধারণ পদ' }] },
  { id: 'math2_ch6', number: '৬', title: 'কণিক (Conics)', icon: Orbit, subtopics: [{ id: 'math2_6_1', title: 'পরাবৃত্ত (Parabola)' }, { id: 'math2_6_2', title: 'উপবৃত্ত (Ellipse)' }, { id: 'math2_6_3', title: 'অধিবৃত্ত (Hyperbola)' }] },
  { id: 'math2_ch7', number: '৭', title: 'বিপরীত ত্রিকোণমিতিক ফাংশন', icon: Triangle, subtopics: [{ id: 'math2_7_1', title: 'বিপরীত ফাংশন' }, { id: 'math2_7_2', title: 'ত্রিকোণমিতিক সমীকরণ' }] },
  { id: 'math2_ch8', number: '৮', title: 'স্থিতিবিদ্যা', icon: Anchor, subtopics: [{ id: 'math2_8_1', title: 'বলের লব্ধি' }, { id: 'math2_8_2', title: 'লামির উপপাদ্য' }] },
  { id: 'math2_ch9', number: '৯', title: 'সমতলে বস্তুকণার গতি', icon: Activity, subtopics: [{ id: 'math2_9_1', title: 'বেগ ও ত্বরণ' }, { id: 'math2_9_2', title: 'প্রাস' }] },
  { id: 'math2_ch10', number: '১০', title: 'বিস্তার পরিমাপ ও সম্ভাবনা', icon: Dices, subtopics: [{ id: 'math2_10_1', title: 'বিস্তার পরিমাপ' }, { id: 'math2_10_2', title: 'সম্ভাবনা (Probability)' }] }
];
const SYLLABUS_MATH2_EN: Chapter[] = [
  { id: 'math2_ch1', number: '1', title: 'Real Numbers & Inequality', icon: Binary, subtopics: [{ id: 'math2_1_1', title: 'Real Numbers' }, { id: 'math2_1_2', title: 'Inequalities' }] },
  { id: 'math2_ch3', number: '3', title: 'Complex Numbers', icon: Sigma, subtopics: [{ id: 'math2_3_1', title: 'Modulus & Argument' }, { id: 'math2_3_2', title: 'Cube Roots of Unity' }] },
  { id: 'math2_ch4', number: '4', title: 'Polynomials', icon: Calculator, subtopics: [{ id: 'math2_4_1', title: 'Quadratic Roots' }, { id: 'math2_4_2', title: 'Roots & Coefficients' }] },
  { id: 'math2_ch5', number: '5', title: 'Binomial Expansion', icon: Hash, subtopics: [{ id: 'math2_5_1', title: 'Pascal\'s Triangle' }, { id: 'math2_5_2', title: 'General Term' }] },
  { id: 'math2_ch6', number: '6', title: 'Conics', icon: Orbit, subtopics: [{ id: 'math2_6_1', title: 'Parabola' }, { id: 'math2_6_2', title: 'Ellipse' }, { id: 'math2_6_3', title: 'Hyperbola' }] },
  { id: 'math2_ch7', number: '7', title: 'Inverse Trigonometry', icon: Triangle, subtopics: [{ id: 'math2_7_1', title: 'Inverse Functions' }, { id: 'math2_7_2', title: 'Trigonometric Equations' }] },
  { id: 'math2_ch8', number: '8', title: 'Statics', icon: Anchor, subtopics: [{ id: 'math2_8_1', title: 'Resultant of Forces' }, { id: 'math2_8_2', title: 'Lami\'s Theorem' }] },
  { id: 'math2_ch9', number: '9', title: 'Dynamics', icon: Activity, subtopics: [{ id: 'math2_9_1', title: 'Velocity & Acceleration' }, { id: 'math2_9_2', title: 'Projectile' }] },
  { id: 'math2_ch10', number: '10', title: 'Probability', icon: Dices, subtopics: [{ id: 'math2_10_1', title: 'Measures of Dispersion' }, { id: 'math2_10_2', title: 'Probability' }] }
];

// --- BANGLA 1ST PAPER ---
const SYLLABUS_BANGLA1_BN: Chapter[] = [
  { id: 'ban1_prose', number: 'গদ্য', title: 'গদ্য অংশ', icon: Book, subtopics: [{ id: 'ban1_p1', title: 'অপরিচিতা' }, { id: 'ban1_p2', title: 'বিলাসী' }, { id: 'ban1_p3', title: 'মাসি-পিসি' }, { id: 'ban1_p4', title: 'বায়ান্নর দিনগুলো' }, { id: 'ban1_p5', title: 'মানব কল্যাণ' }, { id: 'ban1_p6', title: 'রেইনকোট' }] },
  { id: 'ban1_poem', number: 'পদ্য', title: 'কবিতা অংশ', icon: Feather, subtopics: [{ id: 'ban1_po1', title: 'সোনার তরী' }, { id: 'ban1_po2', title: 'বিদ্রোহী' }, { id: 'ban1_po3', title: 'তাহারেই পড়ে মনে' }, { id: 'ban1_po4', title: 'প্রতিদান' }, { id: 'ban1_po5', title: 'ফেব্রুয়ারি ১৯৬৯' }] },
  { id: 'ban1_novel', number: 'উপন্যাস', title: 'লালসালু', icon: ScrollText, subtopics: [{ id: 'ban1_n1', title: 'লালসালু - মূলভাব' }, { id: 'ban1_n2', title: 'চরিত্র বিশ্লেষণ' }] },
  { id: 'ban1_drama', number: 'নাটক', title: 'সিরাজউদ্দৌলা', icon: Users, subtopics: [{ id: 'ban1_d1', title: 'সিরাজউদ্দৌলা - মূলভাব' }, { id: 'ban1_d2', title: 'ঐতিহাসিক পটভূমি' }] }
];
const SYLLABUS_BANGLA1_EN: Chapter[] = [
  { id: 'ban1_prose', number: 'Prose', title: 'Prose Selection', icon: Book, subtopics: [{ id: 'ban1_p1', title: 'Oporichita' }, { id: 'ban1_p2', title: 'Bilashi' }, { id: 'ban1_p3', title: 'Mashi-Pishi' }] },
  { id: 'ban1_poem', number: 'Poetry', title: 'Poetry Selection', icon: Feather, subtopics: [{ id: 'ban1_po1', title: 'Sonar Tori' }, { id: 'ban1_po2', title: 'Bidrohi' }] },
  { id: 'ban1_novel', number: 'Novel', title: 'Lalsalu', icon: ScrollText, subtopics: [{ id: 'ban1_n1', title: 'Theme of Lalsalu' }, { id: 'ban1_n2', title: 'Character Analysis' }] }
];

// --- BANGLA 2ND PAPER ---
const SYLLABUS_BANGLA2_BN: Chapter[] = [
  { id: 'ban2_grammar', number: '১', title: 'ব্যাকরণ', icon: PenTool, subtopics: [{ id: 'ban2_g1', title: 'বাংলা উচ্চারণের নিয়ম' }, { id: 'ban2_g2', title: 'বাংলা বানানের নিয়ম' }, { id: 'ban2_g3', title: 'বাক্য তত্ত্ব' }, { id: 'ban2_g4', title: 'সমাস' }, { id: 'ban2_g5', title: 'প্রকৃতি ও প্রত্যয়' }] },
  { id: 'ban2_comp', number: '২', title: 'নির্মিতি', icon: FileText, subtopics: [{ id: 'ban2_c1', title: 'পারিভাষিক শব্দ' }, { id: 'ban2_c2', title: 'দিনলিপি ও প্রতিবেদন' }, { id: 'ban2_c3', title: 'সারাংশ ও সারমর্ম' }, { id: 'ban2_c4', title: 'ভাবসম্প্রসারণ' }] }
];
const SYLLABUS_BANGLA2_EN: Chapter[] = [
  { id: 'ban2_grammar', number: '1', title: 'Grammar', icon: PenTool, subtopics: [{ id: 'ban2_g1', title: 'Rules of Pronunciation' }, { id: 'ban2_g2', title: 'Spelling Rules' }, { id: 'ban2_g3', title: 'Sentence Structure' }] },
  { id: 'ban2_comp', number: '2', title: 'Composition', icon: FileText, subtopics: [{ id: 'ban2_c1', title: 'Technical Terms' }, { id: 'ban2_c2', title: 'Report Writing' }, { id: 'ban2_c3', title: 'Summary Writing' }] }
];

// --- ENGLISH 1ST PAPER ---
const SYLLABUS_ENG1_EN: Chapter[] = [
  { id: 'eng1_u1', number: '1', title: 'People or Institutions Making History', icon: Users, subtopics: [{ id: 'eng1_u1_l1', title: 'The Unforgettable History' }, { id: 'eng1_u1_l2', title: 'Nelson Mandela' }, { id: 'eng1_u1_l3', title: 'Two Women' }] },
  { id: 'eng1_u2', number: '2', title: 'Greatest Scientific Achievements', icon: Atom, subtopics: [{ id: 'eng1_u2_l1', title: 'Some of the Greatest Scientific Achievements' }, { id: 'eng1_u2_l2', title: 'Science and Technology Against an Age-old Disease' }] },
  { id: 'eng1_u3', number: '3', title: 'Dreams', icon: Cloud, subtopics: [{ id: 'eng1_u3_l1', title: 'What is a Dream?' }, { id: 'eng1_u3_l2', title: 'Dream Poems' }] },
  { id: 'eng1_u4', number: '4', title: 'Human Relationships', icon: Heart, subtopics: [{ id: 'eng1_u4_l1', title: 'Etiquette and Manners' }, { id: 'eng1_u4_l2', title: 'Love and Friendship' }] },
  { id: 'eng1_u5', number: '5', title: 'Adolescence', icon: Users, subtopics: [{ id: 'eng1_u5_l1', title: 'The Storm and Stress at Adolescence' }, { id: 'eng1_u5_l2', title: 'Adolescence and Some (Related) Problems in Bangladesh' }] }
];

// --- ENGLISH 2ND PAPER ---
const SYLLABUS_ENG2_EN: Chapter[] = [
  { id: 'eng2_grammar', number: '1', title: 'Grammar', icon: Book, subtopics: [{ id: 'eng2_g1', title: 'Prepositions' }, { id: 'eng2_g2', title: 'Completing Sentences' }, { id: 'eng2_g3', title: 'Right Form of Verbs' }, { id: 'eng2_g4', title: 'Narration' }, { id: 'eng2_g5', title: 'Modifiers' }, { id: 'eng2_g6', title: 'Connectors' }, { id: 'eng2_g7', title: 'Synonyms and Antonyms' }, { id: 'eng2_g8', title: 'Punctuation' }] },
  { id: 'eng2_comp', number: '2', title: 'Composition', icon: PenTool, subtopics: [{ id: 'eng2_c1', title: 'Formal Letter / Application' }, { id: 'eng2_c2', title: 'Paragraph Writing' }, { id: 'eng2_c3', title: 'Report Writing' }] }
];

// --- SOCIAL WORK 1ST PAPER ---
const SYLLABUS_SW1_BN: Chapter[] = [
  { id: 'sw1_ch1', number: '১', title: 'সমাজকর্ম: প্রকৃতি ও পরিধি', icon: Users, subtopics: [{ id: 'sw1_1_1', title: 'সমাজকর্মের সংজ্ঞা ও লক্ষ্য' }, { id: 'sw1_1_2', title: 'সমাজকর্মের গুরুত্ব' }] },
  { id: 'sw1_ch2', number: '২', title: 'সমাজকর্ম পেশা', icon: Briefcase, subtopics: [{ id: 'sw1_2_1', title: 'পেশার ধারণা ও বৈশিষ্ট্য' }, { id: 'sw1_2_2', title: 'সমাজকর্ম কি একটি পেশা?' }] },
  { id: 'sw1_ch3', number: '৩', title: 'সমাজকর্মের মূল্যবোধ ও নীতিমালা', icon: Scale, subtopics: [{ id: 'sw1_3_1', title: 'পেশাগত মূল্যবোধ' }, { id: 'sw1_3_2', title: 'নৈতিক মানদণ্ড' }] },
  { id: 'sw1_ch4', number: '৪', title: 'সমাজকর্ম সম্পর্কিত প্রত্যয়', icon: Book, subtopics: [{ id: 'sw1_4_1', title: 'সামাজিক নিরাপত্তা' }, { id: 'sw1_4_2', title: 'সমাজ সংস্কার' }] }
];
const SYLLABUS_SW1_EN: Chapter[] = [
  { id: 'sw1_ch1', number: '1', title: 'Nature & Scope of Social Work', icon: Users, subtopics: [{ id: 'sw1_1_1', title: 'Definition & Goals' }, { id: 'sw1_1_2', title: 'Importance of Social Work' }] },
  { id: 'sw1_ch2', number: '2', title: 'Social Work Profession', icon: Briefcase, subtopics: [{ id: 'sw1_2_1', title: 'Concept of Profession' }, { id: 'sw1_2_2', title: 'Is Social Work a Profession?' }] }
];

// --- SOCIAL WORK 2ND PAPER ---
const SYLLABUS_SW2_BN: Chapter[] = [
  { id: 'sw2_ch1', number: '১', title: 'বাংলাদেশের মৌলিক মানবিক চাহিদা', icon: Heart, subtopics: [{ id: 'sw2_1_1', title: 'মৌলিক মানবিক চাহিদিসমূহ' }, { id: 'sw2_1_2', title: 'বাংলাদেশে অপূর্ণতার কারণ' }] },
  { id: 'sw2_ch2', number: '২', title: 'সামাজিক সমস্যা', icon: AlertTriangle, subtopics: [{ id: 'sw2_2_1', title: 'নিরক্ষরতা ও বেকারত্ব' }, { id: 'sw2_2_2', title: 'মাদকাসক্তি ও যৌতুক' }, { id: 'sw2_2_3', title: 'বাল্যবিবাহ ও অটিজম' }] },
  { id: 'sw2_ch3', number: '৩', title: 'সামাজিক সমস্যা সমাধানে সমাজকর্ম', icon: Users, subtopics: [{ id: 'sw2_3_1', title: 'কাউন্সেলিং' }, { id: 'sw2_3_2', title: 'পুনর্বাসন' }] }
];
const SYLLABUS_SW2_EN: Chapter[] = [
  { id: 'sw2_ch1', number: '1', title: 'Basic Human Needs', icon: Heart, subtopics: [{ id: 'sw2_1_1', title: 'List of Basic Needs' }, { id: 'sw2_1_2', title: 'Causes of Unfulfillment in BD' }] },
  { id: 'sw2_ch2', number: '2', title: 'Social Problems', icon: AlertTriangle, subtopics: [{ id: 'sw2_2_1', title: 'Illiteracy & Unemployment' }, { id: 'sw2_2_2', title: 'Drug Addiction & Dowry' }] }
];

// --- AGRICULTURE 1ST PAPER ---
const SYLLABUS_AGR1_BN: Chapter[] = [
  { id: 'agr1_ch1', number: '১', title: 'বাংলাদেশের কৃষি', icon: Sprout, subtopics: [{ id: 'agr1_1_1', title: 'কৃষির ক্ষেত্রসমূহ' }, { id: 'agr1_1_2', title: 'কৃষি তথ্যের উৎস' }] },
  { id: 'agr1_ch2', number: '২', title: 'ভূমি সম্পৃক্ত কৃষি প্রযুক্তি', icon: Tractor, subtopics: [{ id: 'agr1_2_1', title: 'মাটির অম্লত্ব ও ক্ষারত্ব' }, { id: 'agr1_2_2', title: 'সার ব্যবহার' }] },
  { id: 'agr1_ch3', number: '৩', title: 'বিশেষ উৎপাদন সম্পৃক্ত কৃষি প্রযুক্তি', icon: Leaf, subtopics: [{ id: 'agr1_3_1', title: 'বীজ ও বীজ প্রক্রিয়া' }, { id: 'agr1_3_2', title: 'রেশম চাষ' }] },
  { id: 'agr1_ch4', number: '৪', title: 'কৃষি ও জলবায়ু', icon: Cloud, subtopics: [{ id: 'agr1_4_1', title: 'জলবায়ু পরিবর্তন' }, { id: 'agr1_4_2', title: 'খরা ও লবণাক্ততা' }] }
];
const SYLLABUS_AGR1_EN: Chapter[] = [
  { id: 'agr1_ch1', number: '1', title: 'Agriculture of Bangladesh', icon: Sprout, subtopics: [{ id: 'agr1_1_1', title: 'Fields of Agriculture' }, { id: 'agr1_1_2', title: 'Sources of Agri Information' }] },
  { id: 'agr1_ch2', number: '2', title: 'Land Related Agri Technology', icon: Tractor, subtopics: [{ id: 'agr1_2_1', title: 'Soil Acidity & Alkalinity' }, { id: 'agr1_2_2', title: 'Fertilizer Application' }] }
];

// --- AGRICULTURE 2ND PAPER ---
const SYLLABUS_AGR2_BN: Chapter[] = [
  { id: 'agr2_ch1', number: '১', title: 'মৎস্য চাষ', icon: Fish, subtopics: [{ id: 'agr2_1_1', title: 'রাজপুঁটি ও নাইলোটিকা চাষ' }, { id: 'agr2_1_2', title: 'মাছের রোগ ও প্রতিকার' }] },
  { id: 'agr2_ch2', number: '২', title: 'পোলট্রি পালন', icon: Bird, subtopics: [{ id: 'agr2_2_1', title: 'ব্রয়লার ও লেয়ার পালন' }, { id: 'agr2_2_2', title: 'ডিম সংরক্ষণ' }] },
  { id: 'agr2_ch3', number: '৩', title: 'পশুপালন', icon: Paw, subtopics: [{ id: 'agr2_3_1', title: 'গরু মোটা তাজাকরণ' }, { id: 'agr2_3_2', title: 'ডেইরি ফার্ম' }] },
  { id: 'agr2_ch4', number: '৪', title: 'বনায়ন', icon: Trees, subtopics: [{ id: 'agr2_4_1', title: 'সামাজিক বনায়ন' }, { id: 'agr2_4_2', title: 'নার্সারি' }] }
];
const SYLLABUS_AGR2_EN: Chapter[] = [
  { id: 'agr2_ch1', number: '1', title: 'Fish Culture', icon: Fish, subtopics: [{ id: 'agr2_1_1', title: 'Rajpunti & Nilotica Culture' }, { id: 'agr2_1_2', title: 'Fish Diseases' }] },
  { id: 'agr2_ch2', number: '2', title: 'Poultry Rearing', icon: Bird, subtopics: [{ id: 'agr2_2_1', title: 'Broiler & Layer Rearing' }, { id: 'agr2_2_2', title: 'Egg Preservation' }] }
];

// --- CIVICS 1ST PAPER ---
const SYLLABUS_CIV1_BN: Chapter[] = [
  { id: 'civ1_ch1', number: '১', title: 'পৌরনীতি ও সুশাসন পরিচিতি', icon: Landmark, subtopics: [{ id: 'civ1_1_1', title: 'পৌরনীতির ধারণা ও পরিধি' }, { id: 'civ1_1_2', title: 'সুশাসনের বৈশিষ্ট্য' }] },
  { id: 'civ1_ch2', number: '২', title: 'সুশাসন', icon: Gavel, subtopics: [{ id: 'civ1_2_1', title: 'সুশাসনের উপাদান' }, { id: 'civ1_2_2', title: 'সুশাসনের সমস্যা' }] },
  { id: 'civ1_ch3', number: '৩', title: 'মূল্যবোধ, আইন, স্বাধীনতা ও সাম্য', icon: Scale, subtopics: [{ id: 'civ1_3_1', title: 'আইনের উৎস' }, { id: 'civ1_3_2', title: 'স্বাধীনতা ও সাম্যের সম্পর্ক' }] },
  { id: 'civ1_ch5', number: '৫', title: 'নাগরিক অধিকার ও কর্তব্য', icon: Users, subtopics: [{ id: 'civ1_5_1', title: 'অধিকারের শ্রেণিবিভাগ' }, { id: 'civ1_5_2', title: 'তথ্য অধিকার আইন' }] },
  { id: 'civ1_ch6', number: '৬', title: 'রাজনৈতিক দল ও নেতৃত্ব', icon: Flag, subtopics: [{ id: 'civ1_6_1', title: 'রাজনৈতিক দলের কার্যাবলি' }, { id: 'civ1_6_2', title: 'নেতৃত্বের গুণাবলি' }] },
  { id: 'civ1_ch7', number: '৭', title: 'সরকার কাঠামো', icon: Building, subtopics: [{ id: 'civ1_7_1', title: 'গণতন্ত্র ও একনায়কতন্ত্র' }, { id: 'civ1_7_2', title: 'সংসদীয় ও রাষ্ট্রপতি শাসিত সরকার' }] }
];
const SYLLABUS_CIV1_EN: Chapter[] = [
  { id: 'civ1_ch1', number: '1', title: 'Introduction to Civics & Good Governance', icon: Landmark, subtopics: [{ id: 'civ1_1_1', title: 'Concept & Scope' }, { id: 'civ1_1_2', title: 'Features of Good Governance' }] },
  { id: 'civ1_ch3', number: '3', title: 'Values, Law, Liberty & Equality', icon: Scale, subtopics: [{ id: 'civ1_3_1', title: 'Sources of Law' }, { id: 'civ1_3_2', title: 'Relation between Liberty & Equality' }] }
];

// --- CIVICS 2ND PAPER ---
const SYLLABUS_CIV2_BN: Chapter[] = [
  { id: 'civ2_ch1', number: '১', title: 'ব্রিটিশ ভারতে প্রতিনিধিত্বশীল সরকারের বিকাশ', icon: Building, subtopics: [{ id: 'civ2_1_1', title: '১৯০৫ সালের বঙ্গভঙ্গ' }, { id: 'civ2_1_2', title: '১৯৪০ সালের লাহোর প্রস্তাব' }] },
  { id: 'civ2_ch2', number: '২', title: 'পাকিস্তান থেকে বাংলাদেশ', icon: Flag, subtopics: [{ id: 'civ2_2_1', title: '১৯৫২ সালের ভাষা আন্দোলন' }, { id: 'civ2_2_2', title: '১৯৭১ সালের স্বাধীনতা যুদ্ধ' }] },
  { id: 'civ2_ch3', number: '৩', title: 'রাজনৈতিক ব্যক্তিত্ব', icon: Users, subtopics: [{ id: 'civ2_3_1', title: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান' }, { id: 'civ2_3_2', title: 'মাওলানা ভাসানী' }] },
  { id: 'civ2_ch4', number: '৪', title: 'বাংলাদেশের সংবিধান', icon: Book, subtopics: [{ id: 'civ2_4_1', title: 'সংবিধানের বৈশিষ্ট্য' }, { id: 'civ2_4_2', title: 'মৌলিক অধিকার' }] },
  { id: 'civ2_ch10', number: '১০', title: 'নাগরিক সমস্যা ও আমাদের করণীয়', icon: AlertTriangle, subtopics: [{ id: 'civ2_10_1', title: 'জলবায়ু পরিবর্তন' }, { id: 'civ2_10_2', title: 'দুর্নীতি ও ইভ টিজিং' }] }
];
const SYLLABUS_CIV2_EN: Chapter[] = [
  { id: 'civ2_ch1', number: '1', title: 'Rep. Govt. in British India', icon: Building, subtopics: [{ id: 'civ2_1_1', title: 'Partition of Bengal 1905' }, { id: 'civ2_1_2', title: 'Lahore Resolution 1940' }] },
  { id: 'civ2_ch2', number: '2', title: 'Pakistan to Bangladesh', icon: Flag, subtopics: [{ id: 'civ2_2_1', title: 'Language Movement 1952' }, { id: 'civ2_2_2', title: 'Liberation War 1971' }] }
];

// --- ACCOUNTING 1ST PAPER ---
const SYLLABUS_ACC1_BN: Chapter[] = [
  { id: 'acc1_ch1', number: '১', title: 'হিসাববিজ্ঞান পরিচিতি', icon: Calculator, subtopics: [{ id: 'acc1_1_1', title: 'হিসাববিজ্ঞানের উদ্দেশ্য' }, { id: 'acc1_1_2', title: 'হিসাব সমীকরণ' }] },
  { id: 'acc1_ch2', number: '২', title: 'হিসাবের বইসমূহ', icon: Book, subtopics: [{ id: 'acc1_2_1', title: 'জাবেদা ও খতিয়ান' }, { id: 'acc1_2_2', title: 'নগদান বই' }, { id: 'acc1_2_3', title: 'রওয়ামিল (Trial Balance)' }] },
  { id: 'acc1_ch3', number: '৩', title: 'ব্যাংক সমন্বয় বিবরণী', icon: Receipt, subtopics: [{ id: 'acc1_3_1', title: 'ব্যাংক সমন্বয় বিবরণী প্রস্তুতকরণ' }] },
  { id: 'acc1_ch4', number: '৪', title: 'রেওয়ামিল', icon: Scale, subtopics: [{ id: 'acc1_4_1', title: 'রেওয়ামিলের অশুদ্ধি' }, { id: 'acc1_4_2', title: 'শুদ্ধিকরণ' }] },
  { id: 'acc1_ch8', number: '৮', title: 'দৃশ্যমান ও অদৃশ্যমান সম্পদের হিসাব', icon: Eye, subtopics: [{ id: 'acc1_8_1', title: 'অবচয় (Depreciation)' }, { id: 'acc1_8_2', title: 'অবচয় ধার্য করার পদ্ধতি' }] },
  { id: 'acc1_ch9', number: '৯', title: 'আর্থিক বিবরণী', icon: PieChart, subtopics: [{ id: 'acc1_9_1', title: 'বিশদ আয় বিবরণী' }, { id: 'acc1_9_2', title: 'আর্থিক অবস্থার বিবরণী' }] }
];
const SYLLABUS_ACC1_EN: Chapter[] = [
  { id: 'acc1_ch1', number: '1', title: 'Introduction to Accounting', icon: Calculator, subtopics: [{ id: 'acc1_1_1', title: 'Objectives' }, { id: 'acc1_1_2', title: 'Accounting Equation' }] },
  { id: 'acc1_ch2', number: '2', title: 'Books of Accounts', icon: Book, subtopics: [{ id: 'acc1_2_1', title: 'Journal & Ledger' }, { id: 'acc1_2_2', title: 'Cash Book' }] }
];

// --- ACCOUNTING 2ND PAPER ---
const SYLLABUS_ACC2_BN: Chapter[] = [
  { id: 'acc2_ch1', number: '১', title: 'অব্যবসায়ী প্রতিষ্ঠানের হিসাব', icon: Receipt, subtopics: [{ id: 'acc2_1_1', title: 'প্রাপ্তি ও প্রদান হিসাব' }, { id: 'acc2_1_2', title: 'আয়-ব্যয় হিসাব' }] },
  { id: 'acc2_ch2', number: '২', title: 'অংশীদারি ব্যবসায়ের হিসাব', icon: Users, subtopics: [{ id: 'acc2_2_1', title: 'লাভ-ক্ষতি আবণ্টন হিসাব' }, { id: 'acc2_2_2', title: 'অংশীদারদের মূলধন হিসাব' }] },
  { id: 'acc2_ch4', number: '৪', title: 'যৌথ মূলধনী কোম্পানির মূলধন', icon: Briefcase, subtopics: [{ id: 'acc2_4_1', title: 'শেয়ার ইস্যু' }, { id: 'acc2_4_2', title: 'অধিহার ও অবহার' }] },
  { id: 'acc2_ch5', number: '৫', title: 'যৌথ মূলধনী কোম্পানির আর্থিক বিবরণী', icon: FileText, subtopics: [{ id: 'acc2_5_1', title: 'সংরক্ষিত আয় বিবরণী' }, { id: 'acc2_5_2', title: 'উদ্বৃত্তপত্র' }] },
  { id: 'acc2_ch6', number: '৬', title: 'আর্থিক বিবরণী বিশ্লেষণ', icon: TrendingUp, subtopics: [{ id: 'acc2_6_1', title: 'অনুপাত বিশ্লেষণ' }, { id: 'acc2_6_2', title: 'তারল্য ও মুনাফা অর্জন ক্ষমতা' }] },
  { id: 'acc2_ch8', number: '৮', title: 'মজুদ পণ্যের হিসাবরক্ষণ', icon: Layers, subtopics: [{ id: 'acc2_8_1', title: 'FIFO পদ্ধতি' }, { id: 'acc2_8_2', title: 'LIFO ও ভারযুক্ত গড় পদ্ধতি' }] }
];
const SYLLABUS_ACC2_EN: Chapter[] = [
  { id: 'acc2_ch1', number: '1', title: 'Non-Trading Concerns', icon: Receipt, subtopics: [{ id: 'acc2_1_1', title: 'Receipts & Payments A/C' }, { id: 'acc2_1_2', title: 'Income & Expenditure A/C' }] },
  { id: 'acc2_ch2', number: '2', title: 'Partnership Accounts', icon: Users, subtopics: [{ id: 'acc2_2_1', title: 'Profit & Loss Approp. A/C' }, { id: 'acc2_2_2', title: 'Partners Capital A/C' }] }
];

// --- FINANCE 1ST PAPER ---
const SYLLABUS_FIN1_BN: Chapter[] = [
  { id: 'fin1_ch1', number: '১', title: 'অর্থায়নের সূচনা', icon: Coins, subtopics: [{ id: 'fin1_1_1', title: 'অর্থায়নের কার্যাবলি' }, { id: 'fin1_1_2', title: 'অর্থায়নের নীতি' }] },
  { id: 'fin1_ch3', number: '৩', title: 'অর্থের সময়মূল্য', icon: Clock, subtopics: [{ id: 'fin1_3_1', title: 'বর্তমান মূল্য ও ভবিষ্যৎ মূল্য' }, { id: 'fin1_3_2', title: 'অ্যানুইটি' }] },
  { id: 'fin1_ch6', number: '৬', title: 'দীর্ঘমেয়াদি অর্থায়ন', icon: Briefcase, subtopics: [{ id: 'fin1_6_1', title: 'বন্ড ভ্যালুয়েশন' }, { id: 'fin1_6_2', title: 'স্টক ভ্যালুয়েশন' }] },
  { id: 'fin1_ch8', number: '৮', title: 'মূলধন বাজেটিং', icon: Calculator, subtopics: [{ id: 'fin1_8_1', title: 'গড় মুনাফার হার (ARR)' }, { id: 'fin1_8_2', title: 'পে-ব্যাক সময় (PBP)' }, { id: 'fin1_8_3', title: 'নিট বর্তমান মূল্য (NPV)' }] },
  { id: 'fin1_ch9', number: '৯', title: 'ঝুঁকি ও মুনাফার হার', icon: TrendingUp, subtopics: [{ id: 'fin1_9_1', title: 'আদর্শ বিচ্যুতি (Standard Deviation)' }, { id: 'fin1_9_2', title: 'পোর্টফোলিও ঝুঁকি' }] }
];
const SYLLABUS_FIN1_EN: Chapter[] = [
  { id: 'fin1_ch1', number: '1', title: 'Introduction to Finance', icon: Coins, subtopics: [{ id: 'fin1_1_1', title: 'Functions of Finance' }, { id: 'fin1_1_2', title: 'Principles of Finance' }] },
  { id: 'fin1_ch3', number: '3', title: 'Time Value of Money', icon: Clock, subtopics: [{ id: 'fin1_3_1', title: 'PV & FV' }, { id: 'fin1_3_2', title: 'Annuity' }] }
];

// --- FINANCE 2ND PAPER ---
const SYLLABUS_FIN2_BN: Chapter[] = [
  { id: 'fin2_ch1', number: '১', title: 'ব্যাংক ব্যবস্থার প্রাথমিক ধারণা', icon: Building, subtopics: [{ id: 'fin2_1_1', title: 'ব্যাংকিং ইতিহাস' }, { id: 'fin2_1_2', title: 'ব্যাংকের শ্রেণীবিভাগ' }] },
  { id: 'fin2_ch2', number: '২', title: 'কেন্দ্রীয় ব্যাংক', icon: Landmark, subtopics: [{ id: 'fin2_2_1', title: 'কেন্দ্রীয় ব্যাংকের কার্যাবলি' }, { id: 'fin2_2_2', title: 'ঋণ নিয়ন্ত্রণ পদ্ধতি' }] },
  { id: 'fin2_ch4', number: '৪', title: 'ব্যাংক হিসাব', icon: Book, subtopics: [{ id: 'fin2_4_1', title: 'হিসাবের প্রকারভেদ' }, { id: 'fin2_4_2', title: 'হিসাব খোলার পদ্ধতি' }] },
  { id: 'fin2_ch6', number: '৬', title: 'চেক ও বিনিময় বিল', icon: FileText, subtopics: [{ id: 'fin2_6_1', title: 'চেকের প্রকারভেদ' }, { id: 'fin2_6_2', title: 'চেক অমর্যাদা হওয়ার কারণ' }] },
  { id: 'fin2_ch9', number: '৯', title: 'ইলেকট্রনিক ব্যাংকিং', icon: Cpu, subtopics: [{ id: 'fin2_9_1', title: 'ATM ও অনলাইন ব্যাংকিং' }, { id: 'fin2_9_2', title: 'মোবাইল ব্যাংকিং' }] },
  { id: 'fin2_ch10', number: '১০', title: 'বিমা সম্পর্কে মৌলিক ধারণা', icon: Shield, subtopics: [{ id: 'fin2_10_1', title: 'বিমার গুরুত্ব' }, { id: 'fin2_10_2', title: 'বিমা চুক্তির উপাদান' }] },
  { id: 'fin2_ch11', number: '১১', title: 'জীবন বিমা', icon: Heart, subtopics: [{ id: 'fin2_11_1', title: 'জীবন বিমার প্রকারভেদ' }, { id: 'fin2_11_2', title: 'প্রিমিয়াম গণনা' }] }
];
const SYLLABUS_FIN2_EN: Chapter[] = [
  { id: 'fin2_ch1', number: '1', title: 'Banking Concepts', icon: Building, subtopics: [{ id: 'fin2_1_1', title: 'History of Banking' }, { id: 'fin2_1_2', title: 'Classification of Banks' }] },
  { id: 'fin2_ch2', number: '2', title: 'Central Bank', icon: Landmark, subtopics: [{ id: 'fin2_2_1', title: 'Functions' }, { id: 'fin2_2_2', title: 'Credit Control' }] }
];

// --- ECONOMICS 1ST PAPER ---
const SYLLABUS_ECO1_BN: Chapter[] = [
  { id: 'eco1_ch1', number: '১', title: 'মৌলিক অর্থনৈতিক সমস্যা', icon: AlertTriangle, subtopics: [{ id: 'eco1_1_1', title: 'দুষ্প্রাপ্যতা ও নির্বাচন' }, { id: 'eco1_1_2', title: 'উৎপাদন সম্ভাবনা রেখা (PPC)' }] },
  { id: 'eco1_ch2', number: '২', title: 'ভোক্তা ও উৎপাদকের আচরণ', icon: Users, subtopics: [{ id: 'eco1_2_1', title: 'চাহিদা ও যোগান বিধি' }, { id: 'eco1_2_2', title: 'ভারসাম্য দাম নির্ধারণ' }, { id: 'eco1_2_3', title: 'স্থিতিস্থাপকতা' }] },
  { id: 'eco1_ch3', number: '৩', title: 'উৎপাদন, উৎপাদন ব্যয় ও আয়', icon: Factory, subtopics: [{ id: 'eco1_3_1', title: 'উৎপাদন বিধি' }, { id: 'eco1_3_2', title: 'মোট, গড় ও প্রান্তিক ব্যয়' }] },
  { id: 'eco1_ch4', number: '৪', title: 'বাজার', icon: ShoppingCart, subtopics: [{ id: 'eco1_4_1', title: 'পূর্ণ প্রতিযোগিতামূলক বাজার' }, { id: 'eco1_4_2', title: 'একচেটিয়া বাজার' }] },
  { id: 'eco1_ch9', number: '৯', title: 'সামগ্রিক আয় ও ব্যয়', icon: PieChart, subtopics: [{ id: 'eco1_9_1', title: 'জিডিপি ও জিএনপি (GDP & GNP)' }, { id: 'eco1_9_2', title: 'জাতীয় আয় পরিমাপ' }] },
  { id: 'eco1_ch10', number: '১০', title: 'মুদ্রা ও ব্যাংক', icon: Coins, subtopics: [{ id: 'eco1_10_1', title: 'মুদ্রার কার্যাবলি' }, { id: 'eco1_10_2', title: 'কেন্দ্রীয় ও বাণিজ্যিক ব্যাংক' }] }
];
const SYLLABUS_ECO1_EN: Chapter[] = [
  { id: 'eco1_ch1', number: '1', title: 'Basic Economic Problems', icon: AlertTriangle, subtopics: [{ id: 'eco1_1_1', title: 'Scarcity & Choice' }, { id: 'eco1_1_2', title: 'PPC Curve' }] },
  { id: 'eco1_ch2', number: '2', title: 'Consumer & Producer Behavior', icon: Users, subtopics: [{ id: 'eco1_2_1', title: 'Demand & Supply' }, { id: 'eco1_2_2', title: 'Market Equilibrium' }] }
];

// --- ECONOMICS 2ND PAPER ---
const SYLLABUS_ECO2_BN: Chapter[] = [
  { id: 'eco2_ch1', number: '১', title: 'বাংলাদেশের অর্থনীতি', icon: Globe, subtopics: [{ id: 'eco2_1_1', title: 'বাংলাদেশের অর্থনীতির বৈশিষ্ট্য' }, { id: 'eco2_1_2', title: 'প্রাকৃতিক সম্পদ' }] },
  { id: 'eco2_ch2', number: '২', title: 'বাংলাদেশের কৃষি', icon: Sprout, subtopics: [{ id: 'eco2_2_1', title: 'শস্য বহুমুখীকরণ' }, { id: 'eco2_2_2', title: 'কৃষি ঋণ ও বিপণন' }] },
  { id: 'eco2_ch3', number: '৩', title: 'বাংলাদেশের শিল্প', icon: Factory, subtopics: [{ id: 'eco2_3_1', title: 'পাট ও বস্ত্র শিল্প' }, { id: 'eco2_3_2', title: 'তৈরি পোশাক শিল্প' }] },
  { id: 'eco2_ch4', number: '৪', title: 'জনসংখ্যা, মানবসম্পদ ও আত্মকর্মসংস্থান', icon: Users, subtopics: [{ id: 'eco2_4_1', title: 'জনসংখ্যা সমস্যা' }, { id: 'eco2_4_2', title: 'মানবসম্পদ উন্নয়ন' }] },
  { id: 'eco2_ch7', number: '৭', title: 'মুদ্রাস্ফীতি', icon: TrendingUp, subtopics: [{ id: 'eco2_7_1', title: 'মুদ্রাস্ফীতির কারণ ও প্রভাব' }, { id: 'eco2_7_2', title: 'নিয়ন্ত্রণ পদ্ধতি' }] },
  { id: 'eco2_ch8', number: '৮', title: 'আন্তর্জাতিক বাণিজ্য', icon: Globe, subtopics: [{ id: 'eco2_8_1', title: 'আমদানি ও রপ্তানি' }, { id: 'eco2_8_2', title: 'লেনদেন ভারসাম্য' }] }
];
const SYLLABUS_ECO2_EN: Chapter[] = [
  { id: 'eco2_ch1', number: '1', title: 'Economy of Bangladesh', icon: PieChart, subtopics: [{ id: 'eco2_1_1', title: 'Features' }, { id: 'eco2_1_2', title: 'Natural Resources' }] },
  { id: 'eco2_ch2', number: '2', title: 'Agriculture of Bangladesh', icon: Sprout, subtopics: [{ id: 'eco2_2_1', title: 'Crop Diversification' }, { id: 'eco2_2_2', title: 'Agricultural Credit' }] }
];

// --- MANAGEMENT 1ST PAPER ---
const SYLLABUS_MGMT1_BN: Chapter[] = [
  { id: 'mgmt1_ch1', number: '১', title: 'ব্যবসায়ের মৌলিক ধারণা', icon: Briefcase, subtopics: [{ id: 'mgmt1_1_1', title: 'ব্যবসায়ের ধারণা ও আওতা' }, { id: 'mgmt1_1_2', title: 'ব্যবসায়ের কার্যাবলি ও গুরুত্ব' }] },
  { id: 'mgmt1_ch2', number: '২', title: 'ব্যবসায় পরিবেশ', icon: Globe, subtopics: [{ id: 'mgmt1_2_1', title: 'ব্যবসায় পরিবেশের ধারণা' }, { id: 'mgmt1_2_2', title: 'বাংলাদেশের ব্যবসায় পরিবেশ' }] },
  { id: 'mgmt1_ch3', number: '৩', title: 'একমালিকানা ব্যবসায়', icon: Users, subtopics: [{ id: 'mgmt1_3_1', title: 'একমালিকানা ব্যবসায়ের বৈশিষ্ট্য' }, { id: 'mgmt1_3_2', title: 'উপযুক্ত ক্ষেত্রসমূহ' }] },
  { id: 'mgmt1_ch4', number: '৪', title: 'অংশীদারি ব্যবসায়', icon: Users, subtopics: [{ id: 'mgmt1_4_1', title: 'অংশীদারি ব্যবসায়ের গঠন' }, { id: 'mgmt1_4_2', title: 'অংশীদারদের প্রকারভেদ' }, { id: 'mgmt1_4_3', title: 'বিলোপসাধন' }] },
  { id: 'mgmt1_ch5', number: '৫', title: 'যৌথ মূলধনী ব্যবসায়', icon: Building, subtopics: [{ id: 'mgmt1_5_1', title: 'কোম্পানির শ্রেণিবিভাগ' }, { id: 'mgmt1_5_2', title: 'শেয়ার ও ঋণপত্র' }] },
  { id: 'mgmt1_ch6', number: '৬', title: 'সমবায় সমিতি', icon: Users, subtopics: [{ id: 'mgmt1_6_1', title: 'সমবায় সমিতির মূলনীতি' }, { id: 'mgmt1_6_2', title: 'বাংলাদেশের সমবায় আন্দোলন' }] },
  { id: 'mgmt1_ch7', number: '৭', title: 'রাষ্ট্রীয় ব্যবসায়', icon: Landmark, subtopics: [{ id: 'mgmt1_7_1', title: 'রাষ্ট্রীয় ব্যবসায়ের বৈশিষ্ট্য' }, { id: 'mgmt1_7_2', title: 'ওয়াসা ও বিসিআইসি (WASA & BCIC)' }] },
  { id: 'mgmt1_ch12', number: '১২', title: 'ব্যবসায় মূল্যবোধ ও নৈতিকতা', icon: Scale, subtopics: [{ id: 'mgmt1_12_1', title: 'মূল্যবোধ ও নৈতিকতা' }, { id: 'mgmt1_12_2', title: 'পরিবেশ সংরক্ষণ ও সিএসআর (CSR)' }] }
];
const SYLLABUS_MGMT1_EN: Chapter[] = [
  { id: 'mgmt1_ch1', number: '1', title: 'Basic Concepts of Business', icon: Briefcase, subtopics: [{ id: 'mgmt1_1_1', title: 'Concept & Scope of Business' }, { id: 'mgmt1_1_2', title: 'Functions & Importance' }] },
  { id: 'mgmt1_ch2', number: '2', title: 'Business Environment', icon: Globe, subtopics: [{ id: 'mgmt1_2_1', title: 'Concept of Business Environment' }, { id: 'mgmt1_2_2', title: 'Business Environment in Bangladesh' }] },
  { id: 'mgmt1_ch3', number: '3', title: 'Sole Proprietorship', icon: Users, subtopics: [{ id: 'mgmt1_3_1', title: 'Features of Sole Proprietorship' }, { id: 'mgmt1_3_2', title: 'Suitable Fields' }] },
  { id: 'mgmt1_ch4', number: '4', title: 'Partnership Business', icon: Users, subtopics: [{ id: 'mgmt1_4_1', title: 'Formation of Partnership' }, { id: 'mgmt1_4_2', title: 'Types of Partners' }, { id: 'mgmt1_4_3', title: 'Dissolution' }] },
  { id: 'mgmt1_ch5', number: '5', title: 'Joint Stock Company', icon: Building, subtopics: [{ id: 'mgmt1_5_1', title: 'Classification of Companies' }, { id: 'mgmt1_5_2', title: 'Share & Debenture' }] },
  { id: 'mgmt1_ch6', number: '6', title: 'Cooperative Society', icon: Users, subtopics: [{ id: 'mgmt1_6_1', title: 'Principles of Cooperatives' }, { id: 'mgmt1_6_2', title: 'Cooperative Movement in BD' }] },
  { id: 'mgmt1_ch7', number: '7', title: 'State Enterprise', icon: Landmark, subtopics: [{ id: 'mgmt1_7_1', title: 'Features of State Enterprise' }, { id: 'mgmt1_7_2', title: 'WASA & BCIC' }] },
  { id: 'mgmt1_ch12', number: '12', title: 'Business Values & Ethics', icon: Scale, subtopics: [{ id: 'mgmt1_12_1', title: 'Values & Ethics' }, { id: 'mgmt1_12_2', title: 'Environment Protection & CSR' }] }
];

// --- MANAGEMENT 2ND PAPER ---
const SYLLABUS_MGMT2_BN: Chapter[] = [
  { id: 'mgmt2_ch1', number: '১', title: 'ব্যবস্থাপনার ধারণা', icon: Target, subtopics: [{ id: 'mgmt2_1_1', title: 'ব্যবস্থাপনার কার্যাবলি' }, { id: 'mgmt2_1_2', title: 'ব্যবস্থাপনার স্তর' }] },
  { id: 'mgmt2_ch2', number: '২', title: 'ব্যবস্থাপনার নীতি', icon: FileText, subtopics: [{ id: 'mgmt2_2_1', title: 'হেনরি ফেয়লের ১৪টি নীতি' }, { id: 'mgmt2_2_2', title: 'বৈজ্ঞানিক ব্যবস্থাপনা' }] },
  { id: 'mgmt2_ch3', number: '৩', title: 'পরিকল্পনা', icon: BarChart, subtopics: [{ id: 'mgmt2_3_1', title: 'পরিকল্পনার প্রকারভেদ' }, { id: 'mgmt2_3_2', title: 'উত্তম পরিকল্পনার বৈশিষ্ট্য' }] },
  { id: 'mgmt2_ch4', number: '৪', title: 'সংগঠিতকরণ', icon: Network, subtopics: [{ id: 'mgmt2_4_1', title: 'সংগঠন কাঠামোর প্রকারভেদ' }, { id: 'mgmt2_4_2', title: 'সরলরৈখিক ও উপদেষ্টা সংগঠন' }] },
  { id: 'mgmt2_ch5', number: '৫', title: 'কর্মীসংস্থান', icon: Users, subtopics: [{ id: 'mgmt2_5_1', title: 'কর্মী সংগ্রহ ও নির্বাচন' }, { id: 'mgmt2_5_2', title: 'প্রশিক্ষণ' }] },
  { id: 'mgmt2_ch6', number: '৬', title: 'নেতৃত্ব', icon: Flag, subtopics: [{ id: 'mgmt2_6_1', title: 'নেতৃত্বের প্রকারভেদ' }, { id: 'mgmt2_6_2', title: 'আদর্শ নেতার গুণাবলি' }] },
  { id: 'mgmt2_ch7', number: '৭', title: 'প্রেষণা', icon: Heart, subtopics: [{ id: 'mgmt2_7_1', title: 'মাসলোর চাহিদা সোপান তত্ত্ব' }, { id: 'mgmt2_7_2', title: 'আর্থিক ও অনার্থিক প্রেষণা' }] },
  { id: 'mgmt2_ch8', number: '৮', title: 'যোগাযোগ', icon: MessageCircle, subtopics: [{ id: 'mgmt2_8_1', title: 'যোগাযোগের প্রক্রিয়া' }, { id: 'mgmt2_8_2', title: 'আইসিটি ভিত্তিক যোগাযোগ' }] },
  { id: 'mgmt2_ch9', number: '৯', title: 'সমন্বয়সাধন', icon: Cog, subtopics: [{ id: 'mgmt2_9_1', title: 'সমন্বয়সাধনের গুরুত্ব' }] },
  { id: 'mgmt2_ch10', number: '১০', title: 'নিয়ন্ত্রণ', icon: AlertTriangle, subtopics: [{ id: 'mgmt2_10_1', title: 'নিয়ন্ত্রণ প্রক্রিয়া' }, { id: 'mgmt2_10_2', title: 'নিয়ন্ত্রণের কৌশল (বাজেটীয় নিয়ন্ত্রণ)' }] }
];
const SYLLABUS_MGMT2_EN: Chapter[] = [
  { id: 'mgmt2_ch1', number: '1', title: 'Concept of Management', icon: Target, subtopics: [{ id: 'mgmt2_1_1', title: 'Functions of Management' }, { id: 'mgmt2_1_2', title: 'Levels of Management' }] },
  { id: 'mgmt2_ch2', number: '2', title: 'Principles of Management', icon: FileText, subtopics: [{ id: 'mgmt2_2_1', title: 'Henri Fayol\'s 14 Principles' }, { id: 'mgmt2_2_2', title: 'Scientific Management' }] },
  { id: 'mgmt2_ch3', number: '3', title: 'Planning', icon: BarChart, subtopics: [{ id: 'mgmt2_3_1', title: 'Types of Planning' }, { id: 'mgmt2_3_2', title: 'Features of Good Plan' }] },
  { id: 'mgmt2_ch4', number: '4', title: 'Organizing', icon: Network, subtopics: [{ id: 'mgmt2_4_1', title: 'Types of Organization Structure' }, { id: 'mgmt2_4_2', title: 'Line & Staff Organization' }] },
  { id: 'mgmt2_ch5', number: '5', title: 'Staffing', icon: Users, subtopics: [{ id: 'mgmt2_5_1', title: 'Recruitment & Selection' }, { id: 'mgmt2_5_2', title: 'Training' }] },
  { id: 'mgmt2_ch6', number: '6', title: 'Leadership', icon: Flag, subtopics: [{ id: 'mgmt2_6_1', title: 'Types of Leadership' }, { id: 'mgmt2_6_2', title: 'Qualities of Good Leader' }] },
  { id: 'mgmt2_ch7', number: '7', title: 'Motivation', icon: Heart, subtopics: [{ id: 'mgmt2_7_1', title: 'Maslow\'s Hierarchy of Needs' }, { id: 'mgmt2_7_2', title: 'Financial & Non-Financial Motivation' }] },
  { id: 'mgmt2_ch10', number: '10', title: 'Controlling', icon: AlertTriangle, subtopics: [{ id: 'mgmt2_10_1', title: 'Control Process' }, { id: 'mgmt2_10_2', title: 'Techniques of Control (Budgetary)' }] }
];

// --- MARKETING (PRODUCTION MANAGEMENT & MARKETING) 1ST PAPER ---
const SYLLABUS_MKT1_BN: Chapter[] = [
  { id: 'mkt1_ch1', number: '১', title: 'উৎপাদন', icon: Factory, subtopics: [{ id: 'mkt1_1_1', title: 'উৎপাদনের ধারণা' }, { id: 'mkt1_1_2', title: 'উৎপাদনের গুরুত্ব ও খাতসমূহ' }] },
  { id: 'mkt1_ch2', number: '২', title: 'উৎপাদনের উপকরণ', icon: Component, subtopics: [{ id: 'mkt1_2_1', title: 'ভূমি ও শ্রম' }, { id: 'mkt1_2_2', title: 'মূলধন ও সংগঠন' }] },
  { id: 'mkt1_ch5', number: '৫', title: 'উৎপাদন ব্যবস্থাপনা', icon: Briefcase, subtopics: [{ id: 'mkt1_5_1', title: 'উৎপাদন ব্যবস্থাপনার কার্যাবলি' }, { id: 'mkt1_5_2', title: 'পণ্য ডিজাইন' }] },
  { id: 'mkt1_ch6', number: '৬', title: 'পণ্য ডিজাইন', icon: PenTool, subtopics: [{ id: 'mkt1_6_1', title: 'পণ্য ডিজাইনের পর্যায়' }, { id: 'mkt1_6_2', title: 'উত্তম ডিজাইনের বৈশিষ্ট্য' }] },
  { id: 'mkt1_ch7', number: '৭', title: 'মান ব্যবস্থাপনা', icon: Award, subtopics: [{ id: 'mkt1_7_1', title: 'মান নিয়ন্ত্রণের ধারণা' }, { id: 'mkt1_7_2', title: 'বিএসটিআই (BSTI) ও আইএসও (ISO)' }] }
];
const SYLLABUS_MKT1_EN: Chapter[] = [
  { id: 'mkt1_ch1', number: '1', title: 'Production', icon: Factory, subtopics: [{ id: 'mkt1_1_1', title: 'Concept of Production' }, { id: 'mkt1_1_2', title: 'Importance & Sectors of Production' }] },
  { id: 'mkt1_ch2', number: '2', title: 'Factors of Production', icon: Component, subtopics: [{ id: 'mkt1_2_1', title: 'Land & Labor' }, { id: 'mkt1_2_2', title: 'Capital & Organization' }] },
  { id: 'mkt1_ch5', number: '5', title: 'Production Management', icon: Briefcase, subtopics: [{ id: 'mkt1_5_1', title: 'Functions of Production Management' }, { id: 'mkt1_5_2', title: 'Product Design' }] },
  { id: 'mkt1_ch7', number: '7', title: 'Quality Management', icon: Award, subtopics: [{ id: 'mkt1_7_1', title: 'Concept of Quality Control' }, { id: 'mkt1_7_2', title: 'BSTI & ISO' }] }
];

// --- MARKETING (PRODUCTION MANAGEMENT & MARKETING) 2ND PAPER ---
const SYLLABUS_MKT2_BN: Chapter[] = [
  { id: 'mkt2_ch1', number: '১', title: 'বিপণন পরিচিতি', icon: Megaphone, subtopics: [{ id: 'mkt2_1_1', title: 'বিপণনের ধারণা ও বিবর্তন' }, { id: 'mkt2_1_2', title: 'বিপণনের গুরুত্ব' }] },
  { id: 'mkt2_ch3', number: '৩', title: 'বিপণন কার্যাবলি', icon: Activity, subtopics: [{ id: 'mkt2_3_1', title: 'ক্রয় ও বিক্রয়' }, { id: 'mkt2_3_2', title: 'পরিবহন ও গুদামজাতকরণ' }, { id: 'mkt2_3_3', title: 'প্রমিতকরণ ও পর্যায়িতকরণ' }] },
  { id: 'mkt2_ch4', number: '৪', title: 'বাজার বিভাজকরণ ও বিপণন মিশ্রণ', icon: PieChart, subtopics: [{ id: 'mkt2_4_1', title: 'বাজার বিভাজকরণের ভিত্তি' }, { id: 'mkt2_4_2', title: 'বিপণন মিশ্রণের উপাদান (4Ps)' }] },
  { id: 'mkt2_ch5', number: '৫', title: 'পণ্য ও পণ্যের মূল্য নির্ধারণ', icon: Target, subtopics: [{ id: 'mkt2_5_1', title: 'পণ্যের জীবনচক্র' }, { id: 'mkt2_5_2', title: 'মূল্য নির্ধারণ পদ্ধতি' }] },
  { id: 'mkt2_ch6', number: '৬', title: 'পণ্য বণ্টন প্রণালি', icon: Network, subtopics: [{ id: 'mkt2_6_1', title: 'মধ্যস্থ ব্যবসায়ীদের প্রকারভেদ' }, { id: 'mkt2_6_2', title: 'বণ্টন প্রণালির গুরুত্ব' }] }
];
const SYLLABUS_MKT2_EN: Chapter[] = [
  { id: 'mkt2_ch1', number: '1', title: 'Introduction to Marketing', icon: Megaphone, subtopics: [{ id: 'mkt2_1_1', title: 'Concept & Evolution of Marketing' }, { id: 'mkt2_1_2', title: 'Importance of Marketing' }] },
  { id: 'mkt2_ch3', number: '3', title: 'Marketing Functions', icon: Activity, subtopics: [{ id: 'mkt2_3_1', title: 'Buying & Selling' }, { id: 'mkt2_3_2', title: 'Transportation & Warehousing' }] },
  { id: 'mkt2_ch4', number: '4', title: 'Market Segmentation & Marketing Mix', icon: PieChart, subtopics: [{ id: 'mkt2_4_1', title: 'Bases of Segmentation' }, { id: 'mkt2_4_2', title: 'Marketing Mix (4Ps)' }] },
  { id: 'mkt2_ch5', number: '5', title: 'Product & Pricing', icon: Target, subtopics: [{ id: 'mkt2_5_1', title: 'Product Life Cycle' }, { id: 'mkt2_5_2', title: 'Pricing Methods' }] }
];

// --- ISLAMIC HISTORY & CULTURE 1ST PAPER ---
const SYLLABUS_ISLAM1_BN: Chapter[] = [
  { id: 'islam1_ch1', number: '১', title: 'প্রাক-ইসলামি আরব', icon: Moon, subtopics: [{ id: 'islam1_1_1', title: 'আইয়ামে জাহেলিয়া' }, { id: 'islam1_1_2', title: 'ভৌগোলিক ও সামাজিক অবস্থা' }] },
  { id: 'islam1_ch2', number: '২', title: 'হযরত মুহাম্মদ (সা.)', icon: Book, subtopics: [{ id: 'islam1_2_1', title: 'নবুয়ত প্রাপ্তি ও হিজরত' }, { id: 'islam1_2_2', title: 'মদিনা সনদ ও মক্কা বিজয়' }, { id: 'islam1_2_3', title: 'বিদায় হজ্জ' }] },
  { id: 'islam1_ch3', number: '৩', title: 'খোলাফায়ে রাশেদীন', icon: Users, subtopics: [{ id: 'islam1_3_1', title: 'হযরত আবু বকর (রা.) ও রিদ্দা যুদ্ধ' }, { id: 'islam1_3_2', title: 'হযরত ওমর (রা.) এর শাসনব্যবস্থা' }, { id: 'islam1_3_3', title: 'হযরত ওসমান (রা.) ও আলী (রা.)' }] },
  { id: 'islam1_ch4', number: '৪', title: 'উমাইয়া খিলাফত', icon: Flag, subtopics: [{ id: 'islam1_4_1', title: 'মুয়াবিয়া (রা.) ও রাজতন্ত্র প্রতিষ্ঠা' }, { id: 'islam1_4_2', title: 'কারবালার ঘটনা' }, { id: 'islam1_4_3', title: 'উমর বিন আব্দুল আজিজ' }] },
  { id: 'islam1_ch5', number: '৫', title: 'আব্বাসীয় খিলাফত', icon: Landmark, subtopics: [{ id: 'islam1_5_1', title: 'আব্বাসীয়দের উত্থান' }, { id: 'islam1_5_2', title: 'হারুন-অর-রশিদ ও জ্ঞানবিজ্ঞান' }] }
];
const SYLLABUS_ISLAM1_EN: Chapter[] = [
  { id: 'islam1_ch1', number: '1', title: 'Pre-Islamic Arabia', icon: Moon, subtopics: [{ id: 'islam1_1_1', title: 'Ayyam-e-Jahiliyyah' }, { id: 'islam1_1_2', title: 'Geographical & Social Condition' }] },
  { id: 'islam1_ch2', number: '2', title: 'Prophet Muhammad (SM)', icon: Book, subtopics: [{ id: 'islam1_2_1', title: 'Prophethood & Migration (Hijrat)' }, { id: 'islam1_2_2', title: 'Charter of Medina & Conquest of Mecca' }] },
  { id: 'islam1_ch3', number: '3', title: 'Khulafa-e-Rashideen', icon: Users, subtopics: [{ id: 'islam1_3_1', title: 'Abu Bakr (RA) & Ridda Wars' }, { id: 'islam1_3_2', title: 'Administration of Umar (RA)' }] },
  { id: 'islam1_ch4', number: '4', title: 'Umayyad Caliphate', icon: Flag, subtopics: [{ id: 'islam1_4_1', title: 'Muawiya (RA) & Establishment of Monarchy' }, { id: 'islam1_4_2', title: 'Tragedy of Karbala' }] }
];

// --- ISLAMIC HISTORY & CULTURE 2ND PAPER ---
const SYLLABUS_ISLAM2_BN: Chapter[] = [
  { id: 'islam2_ch1', number: '১', title: 'ভারতে মুসলিম শাসন', icon: Landmark, subtopics: [{ id: 'islam2_1_1', title: 'মুহাম্মদ বিন কাসিমের সিন্ধু বিজয় (৭১২)' }, { id: 'islam2_1_2', title: 'সুলতান মাহমুদ ও মুহাম্মদ ঘুরী' }] },
  { id: 'islam2_ch2', number: '২', title: 'দিল্লির সালতানাত', icon: Building, subtopics: [{ id: 'islam2_2_1', title: 'কুতুবউদ্দিন আইবক ও দাস বংশ' }, { id: 'islam2_2_2', title: 'আলাউদ্দিন খলজী ও মূল্য নিয়ন্ত্রণ' }, { id: 'islam2_2_3', title: 'মুহাম্মদ বিন তুঘলক' }] },
  { id: 'islam2_ch3', number: '৩', title: 'মুঘল সাম্রাজ্য', icon: Award, subtopics: [{ id: 'islam2_3_1', title: 'বাবর ও পানিপথের যুদ্ধ' }, { id: 'islam2_3_2', title: 'আকবরের শাসননীতি ও দ্বীন-ই-ইলাহী' }, { id: 'islam2_3_3', title: 'আওরঙ্গজেব' }] },
  { id: 'islam2_ch5', number: '৫', title: 'বাংলায় মুসলিম শাসন', icon: MapIcon, subtopics: [{ id: 'islam2_5_1', title: 'বখতিয়ার খলজীর বাংলা বিজয়' }, { id: 'islam2_5_2', title: 'ইলিয়াস শাহী ও হোসেন শাহী বংশ' }, { id: 'islam2_5_3', title: 'বারো ভূঁইয়া' }] },
  { id: 'islam2_ch6', number: '৬', title: 'বাংলায় ইংরেজ শাসন', icon: Gavel, subtopics: [{ id: 'islam2_6_1', title: 'পলাশীর যুদ্ধ (১৭৫৭)' }, { id: 'islam2_6_2', title: 'চিরস্থায়ী বন্দোবস্ত (১৭৯৩)' }] }
];
const SYLLABUS_ISLAM2_EN: Chapter[] = [
  { id: 'islam2_ch1', number: '1', title: 'Muslim Rule in India', icon: Landmark, subtopics: [{ id: 'islam2_1_1', title: 'Conquest of Sindh by Bin Qasim (712)' }, { id: 'islam2_1_2', title: 'Sultan Mahmud & Muhammad Ghori' }] },
  { id: 'islam2_ch2', number: '2', title: 'Delhi Sultanate', icon: Building, subtopics: [{ id: 'islam2_2_1', title: 'Qutbuddin Aibak & Slave Dynasty' }, { id: 'islam2_2_2', title: 'Alauddin Khalji' }] },
  { id: 'islam2_ch3', number: '3', title: 'Mughal Empire', icon: Award, subtopics: [{ id: 'islam2_3_1', title: 'Babur & Battle of Panipat' }, { id: 'islam2_3_2', title: 'Administration of Akbar' }] },
  { id: 'islam2_ch5', number: '5', title: 'Muslim Rule in Bengal', icon: MapIcon, subtopics: [{ id: 'islam2_5_1', title: 'Conquest of Bengal by Bakhtiyar Khalji' }, { id: 'islam2_5_2', title: 'Baro-Bhuiyans' }] }
];

export const getSyllabus = (subject: Subject, lang: Language): Chapter[] => {
  if (subject === 'ict') return lang === 'en' ? SYLLABUS_ICT_EN : SYLLABUS_ICT_BN;
  if (subject === 'physics1') return lang === 'en' ? SYLLABUS_PHY1_EN : SYLLABUS_PHY1_BN;
  if (subject === 'physics2') return lang === 'en' ? SYLLABUS_PHY2_EN : SYLLABUS_PHY2_BN;
  if (subject === 'chemistry1') return lang === 'en' ? SYLLABUS_CHEM1_EN : SYLLABUS_CHEM1_BN;
  if (subject === 'chemistry2') return lang === 'en' ? SYLLABUS_CHEM2_EN : SYLLABUS_CHEM2_BN;
  if (subject === 'biology1') return lang === 'en' ? SYLLABUS_BIO1_EN : SYLLABUS_BIO1_BN;
  if (subject === 'biology2') return lang === 'en' ? SYLLABUS_BIO2_EN : SYLLABUS_BIO2_BN;
  if (subject === 'math1') return lang === 'en' ? SYLLABUS_MATH1_EN : SYLLABUS_MATH1_BN;
  if (subject === 'math2') return lang === 'en' ? SYLLABUS_MATH2_EN : SYLLABUS_MATH2_BN;
  if (subject === 'bangla1') return lang === 'en' ? SYLLABUS_BANGLA1_EN : SYLLABUS_BANGLA1_BN;
  if (subject === 'bangla2') return lang === 'en' ? SYLLABUS_BANGLA2_EN : SYLLABUS_BANGLA2_BN;
  if (subject === 'english1') return SYLLABUS_ENG1_EN; 
  if (subject === 'english2') return SYLLABUS_ENG2_EN;
  if (subject === 'socialwork1') return lang === 'en' ? SYLLABUS_SW1_EN : SYLLABUS_SW1_BN;
  if (subject === 'socialwork2') return lang === 'en' ? SYLLABUS_SW2_EN : SYLLABUS_SW2_BN;
  if (subject === 'agriculture1') return lang === 'en' ? SYLLABUS_AGR1_EN : SYLLABUS_AGR1_BN;
  if (subject === 'agriculture2') return lang === 'en' ? SYLLABUS_AGR2_EN : SYLLABUS_AGR2_BN;
  if (subject === 'civics1') return lang === 'en' ? SYLLABUS_CIV1_EN : SYLLABUS_CIV1_BN;
  if (subject === 'civics2') return lang === 'en' ? SYLLABUS_CIV2_EN : SYLLABUS_CIV2_BN;
  if (subject === 'accounting1') return lang === 'en' ? SYLLABUS_ACC1_EN : SYLLABUS_ACC1_BN;
  if (subject === 'accounting2') return lang === 'en' ? SYLLABUS_ACC2_EN : SYLLABUS_ACC2_BN;
  if (subject === 'finance1') return lang === 'en' ? SYLLABUS_FIN1_EN : SYLLABUS_FIN1_BN;
  if (subject === 'finance2') return lang === 'en' ? SYLLABUS_FIN2_EN : SYLLABUS_FIN2_BN;
  if (subject === 'economics1') return lang === 'en' ? SYLLABUS_ECO1_EN : SYLLABUS_ECO1_BN;
  if (subject === 'economics2') return lang === 'en' ? SYLLABUS_ECO2_EN : SYLLABUS_ECO2_BN;
  if (subject === 'management1') return lang === 'en' ? SYLLABUS_MGMT1_EN : SYLLABUS_MGMT1_BN;
  if (subject === 'management2') return lang === 'en' ? SYLLABUS_MGMT2_EN : SYLLABUS_MGMT2_BN;
  if (subject === 'marketing1') return lang === 'en' ? SYLLABUS_MKT1_EN : SYLLABUS_MKT1_BN;
  if (subject === 'marketing2') return lang === 'en' ? SYLLABUS_MKT2_EN : SYLLABUS_MKT2_BN;
  if (subject === 'islam1') return lang === 'en' ? SYLLABUS_ISLAM1_EN : SYLLABUS_ISLAM1_BN;
  if (subject === 'islam2') return lang === 'en' ? SYLLABUS_ISLAM2_EN : SYLLABUS_ISLAM2_BN;
  
  return SYLLABUS_ICT_BN;
};