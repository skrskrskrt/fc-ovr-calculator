import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const positions = {
    ST: { finishing: 18, positioning: 13, ballControl: 10, shotPower: 10, heading: 10, reactions: 8, dribbling: 7, strength: 5, speed: 5, shortPass: 5, accel: 4, longShot: 3, volley: 2 },
    CF: { ballControl: 15, dribbling: 14, positioning: 13, finishing: 11, reactions: 9, shortPass: 9, vision: 8, shotPower: 5, speed: 5, accel: 5, longShot: 4, heading: 2 },
    LW: { dribbling: 16, ballControl: 14, positioning: 10, shortPass: 9, crossing: 9, reactions: 7, accel: 7, vision: 6, speed: 6, longShot: 4, agility: 3 },
    RW: { dribbling: 16, ballControl: 14, positioning: 10, shortPass: 9, crossing: 9, reactions: 7, accel: 7, vision: 6, speed: 6, longShot: 4, agility: 3 },
    CAM: { ballControl: 16, vision: 15, dribbling: 13, positioning: 9, reactions: 7, finishing: 7, longShot: 5, shortPass: 4, accel: 4, speed: 3, agility: 3 },
    LM: { dribbling: 15, ballControl: 13, shortPass: 11, crossing: 10, positioning: 8, reactions: 7, accel: 7, vision: 7, finishing: 6, longPass: 6, stamina: 5 },
    CM: { shortPass: 17, ballControl: 14, vision: 13, longPass: 13, reactions: 8, dribbling: 7, positioning: 6, stamina: 6, strength: 5, accel: 5, longShot: 4, finishing: 2 },
    RM: { dribbling: 15, ballControl: 13, shortPass: 11, crossing: 10, positioning: 8, reactions: 7, accel: 7, vision: 7, finishing: 6, longPass: 6, stamina: 5 },
    CDM: { shortPass: 14, interception: 14, standingTackle: 12, ballControl: 10, longPass: 10, marking: 9, reactions: 7, stamina: 6, slidingTackle: 5, vision: 5, strength: 4 },
    LWB: { accel: 12, crossing: 12, slidingTackle: 11, shortPass: 10, stamina: 10, standingTackle: 8, reactions: 8, marking: 7, speed: 6, dribbling: 4 },
    LB: { slidingTackle: 14, accel: 12, standingTackle: 11, crossing: 9, stamina: 8, reactions: 8, marking: 8, shortPass: 7, ballControl: 7, speed: 7, heading: 4 },
    CB: { slidingTackle: 17, marking: 14, interception: 13, standingTackle: 10, heading: 10, strength: 10, positioning: 7, reactions: 5, shortPass: 5, ballControl: 4, jumping: 3, speed: 2 },
    RB: { slidingTackle: 14, accel: 12, standingTackle: 11, crossing: 9, stamina: 8, reactions: 8, marking: 8, shortPass: 7, ballControl: 7, speed: 7, heading: 4 },
    RWB: { accel: 12, crossing: 12, slidingTackle: 11, shortPass: 10, stamina: 10, standingTackle: 8, reactions: 8, marking: 7, speed: 6, dribbling: 4 },
    GK: { gkDiving: 21, gkHandling: 21, gkKicking: 21, gkReflexes: 21, reactions: 11, gkPositioning: 5 }
  };

  const labels = {
    speed: '속력', accel: '가속력', finishing: '골 결정력', shotPower: '슛 파워', longShot: '중거리 슛',
    positioning: '위치 선정', volley: '발리 슛', penalty: '페널티 킥', shortPass: '짧은 패스', vision: '시야',
    crossing: '크로스', longPass: '긴 패스', freeKick: '프리킥', curve: '커브', dribbling: '드리블',
    ballControl: '볼 컨트롤', agility: '민첩성', balance: '밸런스', reactions: '반응 속도', marking: '대인 수비',
    standingTackle: '태클', interception: '가로채기', heading: '헤더', slidingTackle: '슬라이딩 태클',
    strength: '몸싸움', stamina: '스태미너', aggression: '적극성', jumping: '점프', composure: '침착성',
    gkDiving: 'GK 다이빙', gkHandling: 'GK 핸들링', gkKicking: 'GK 킥', gkReflexes: 'GK 반응속도', gkPositioning: 'GK 위치선정'
  };

  const defaultStats = {
    speed: 95, accel: 94, finishing: 96, shotPower: 92, longShot: 88, positioning: 97, volley: 85, penalty: 83,
    shortPass: 85, vision: 84, crossing: 78, longPass: 80, freeKick: 76, curve: 82, dribbling: 93, ballControl: 91,
    agility: 92, balance: 89, reactions: 94, marking: 50, standingTackle: 55, interception: 60, heading: 87,
    slidingTackle: 45, strength: 83, stamina: 88, aggression: 74, jumping: 88, composure: 91,
    gkDiving: 15, gkHandling: 12, gkKicking: 18, gkReflexes: 14, gkPositioning: 13
  };

  const [stats, setStats] = React.useState(defaultStats);
  const [name, setName] = React.useState('CUSTOM PLAYER');
  const [season, setSeason] = React.useState('TOTY');
  const [position, setPosition] = React.useState('ST');
  const [height, setHeight] = React.useState(182);
  const [weight, setWeight] = React.useState(78);
  const [preferredFoot, setPreferredFoot] = React.useState('RIGHT');
  const [weakFoot, setWeakFoot] = React.useState(5);
  const [age, setAge] = React.useState(24);
  const [bodyType, setBodyType] = React.useState('보통');
  const [savedPlayers, setSavedPlayers] = React.useState([]);

  React.useEffect(() => {
    const data = localStorage.getItem('fcPlayers');
    if (data) setSavedPlayers(JSON.parse(data));
  }, []);

  const calculateOVR = (weights) => {
    let total = 0;
    let totalWeight = 0;
    for (const stat in weights) {
      const cleanStat = stat.replace(/[0-9]/g, '');
      total += stats[cleanStat] * weights[stat];
      totalWeight += weights[stat];
    }
    return Math.round(total / totalWeight);
  };

  const currentOVR = calculateOVR(positions[position]);

  const savePlayer = () => {
    const player = {
      id: Date.now(),
      name, season, position, currentOVR, height, weight,
      preferredFoot, weakFoot, age, bodyType, stats
    };
    const updated = [...savedPlayers, player];
    setSavedPlayers(updated);
    localStorage.setItem('fcPlayers', JSON.stringify(updated));
  };

  const loadPlayer = (player) => {
    setName(player.name);
    setSeason(player.season);
    setPosition(player.position);
    setHeight(player.height);
    setWeight(player.weight);
    setPreferredFoot(player.preferredFoot);
    setWeakFoot(player.weakFoot);
    setAge(player.age);
    setBodyType(player.bodyType);
    setStats(player.stats);
  };

  const deletePlayer = (id, e) => {
    e.stopPropagation(); // 카드 클릭(불러오기) 이벤트 전파 방지
    if (window.confirm('이 선수를 목록에서 삭제하시겠습니까?')) {
      const updated = savedPlayers.filter(p => p.id !== id);
      setSavedPlayers(updated);
      localStorage.setItem('fcPlayers', JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 왼쪽: 선수 카드 섹션 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="lg:w-1/3">
            <div className="rounded-[32px] overflow-hidden border border-emerald-400/30 p-1 shadow-2xl bg-zinc-950 sticky top-6">
              <div className="bg-black/70 backdrop-blur-xl rounded-[30px] p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-6xl font-extrabold leading-none">{currentOVR}</div>
                    <div className="text-xl font-bold mt-1 text-emerald-400">{position}</div>
                  </div>
                  <div className="text-right text-sm text-emerald-300 font-bold">{season}</div>
                </div>
                <div className="h-10"></div>
                <div className="text-2xl font-bold tracking-wide mt-6 text-center">{name}</div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">키 / 몸무게</div>
                    <div className="font-bold">{height}cm / {weight}kg</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">발능력</div>
                    <div className="font-bold">{preferredFoot === 'RIGHT' ? `${weakFoot}/5` : `5/${weakFoot}`}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">나이</div>
                    <div className="font-bold">{age}세</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">체형</div>
                    <div className="font-bold">{bodyType}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 설정 및 스탯 조절 섹션 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:w-2/3">
            <div className="flex gap-4 mb-6">
              <button onClick={savePlayer} className="bg-emerald-400 hover:bg-emerald-300 transition-all text-black font-black px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/20">
                현재 선수 저장하기
              </button>
            </div>

            <div className="bg-zinc-950 border border-emerald-400/20 rounded-3xl p-6 backdrop-blur-xl mb-6">
              <h1 className="text-3xl font-black mb-2 text-emerald-400 uppercase tracking-tighter">FC Online Player Builder</h1>
              <p className="text-zinc-400 text-sm">세부 능력치를 조절하면 모든 포지션 오버롤이 실시간으로 계산됩니다.</p>
            </div>

            {/* 선수 기본 정보 입력 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="bg-zinc-950 rounded-2xl p-4 border border-white/5">
                <label className="text-zinc-500 block mb-2 font-medium">선수 이름</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none focus:ring-1 ring-emerald-500" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-white/5">
                <label className="text-zinc-500 block mb-2 font-medium">시즌 (예: 24TOTY)</label>
                <input value={season} onChange={(e) => setSeason(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none focus:ring-1 ring-emerald-500" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-white/5">
                <label className="text-zinc-500 block mb-2 font-medium">메인 포지션</label>
                <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none">
                  {Object.keys(positions).map(pos => <option key={pos}>{pos}</option>)}
                </select>
              </div>
            </div>

            {/* 스탯 조절 슬라이더 */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-white/5 shadow-2xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.keys(stats).map((key) => (
                  <div key={key} className="bg-zinc-900/50 rounded-2xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-zinc-400 text-sm">{labels[key]}</span>
                      <span className="font-black text-emerald-400 text-lg">{stats[key]}</span>
                    </div>
                    <input type="range" min="1" max="150" value={stats[key]} 
                      onChange={(e) => setStats({...stats, [key]: Number(e.target.value)})}
                      className="w-full accent-emerald-500" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 저장된 선수 목록 (삭제 기능 포함) */}
            <div className="mb-12">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                저장된 선수 목록
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {savedPlayers.length === 0 && <p className="text-zinc-600 italic">저장된 선수가 없습니다.</p>}
                {savedPlayers.map((player) => (
                  <div 
                    key={player.id}
                    onClick={() => loadPlayer(player)}
                    className="bg-zinc-900 hover:bg-zinc-800 transition-all rounded-2xl p-5 border border-white/5 flex justify-between items-center cursor-pointer group"
                  >
                    <div>
                      <div className="text-lg font-bold group-hover:text-emerald-400 transition-colors">{player.name}</div>
                      <div className="text-zinc-500 text-sm">{player.season} · {player.position}</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl font-black text-emerald-400">{player.currentOVR}</div>
                      <button 
                        onClick={(e) => deletePlayer(player.id, e)}
                        className="text-zinc-700 hover:text-red-500 transition-colors p-2 text-xl"
                        title="삭제"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 모든 포지션 오버롤 확인 */}
            <div>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                포지션별 예상 오버롤
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {Object.entries(positions).map(([pos, weights]) => (
                  <div key={pos} className={`rounded-2xl p-4 border transition-all ${position === pos ? 'bg-emerald-500 text-black border-emerald-400 font-bold' : 'bg-zinc-900 border-white/5 text-zinc-400'}`}>
                    <div className="text-xs uppercase mb-1 opacity-70">{pos}</div>
                    <div className="text-2xl font-black">{calculateOVR(weights)}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
