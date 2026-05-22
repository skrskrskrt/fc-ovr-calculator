import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
 const positions = {
    ST: { finishing: 18, positioning: 13, ballControl: 10, shotPower: 10, heading: 10, reactions: 8, dribbling: 7, strength: 5, speed: 5, shortPass: 5, accel: 4, longShot: 3, volley: 2 },
    CF: { ballControl: 15, dribbling: 14, positioning: 13, finishing: 11, reactions: 9, shortPass: 9, vision: 8, shotPower: 5, speed: 5, accel: 5, longShot: 4, heading: 2 },
    LW: { dribbling: 16, ballControl: 14, finishing: 10, positioning: 9, shortPass: 9, crossing: 9, reactions: 7, accel: 7, vision: 6, speed: 6, longShot: 4, agility: 3 },
    RW: { dribbling: 16, ballControl: 14, finishing: 10, positioning: 9, shortPass: 9, crossing: 9, reactions: 7, accel: 7, vision: 6, speed: 6, longShot: 4, agility: 3 },
    CAM: { shortPass: 16, ballControl: 15, vision: 14, dribbling: 13, positioning: 9, reactions: 7, finishing: 7, longShot: 5, accel: 4, longPass: 4, speed: 3, agility: 3 },
    LM: { dribbling: 15, ballControl: 13, shortPass: 11, crossing: 10, positioning: 8, reactions: 7, accel: 7, vision: 7, finishing: 6, speed: 6, stamina: 5, longPass: 5 },
    RM: { dribbling: 15, ballControl: 13, shortPass: 11, crossing: 10, positioning: 8, reactions: 7, accel: 7, vision: 7, finishing: 6, speed: 6, stamina: 5, longPass: 5 },
    CM: { shortPass: 17, ballControl: 14, vision: 13, longPass: 13, reactions: 8, dribbling: 7, positioning: 6, stamina: 6, standingTackle: 5, interception: 5, longShot: 4, finishing: 2 },
    CDM: { shortPass: 14, interception: 14, standingTackle: 12, ballControl: 10, longPass: 10, marking: 9, reactions: 7, stamina: 6, slidingTackle: 5, aggression: 5, vision: 4, strength: 4 },
    LWB: { interception: 12, crossing: 12, slidingTackle: 11, shortPass: 10, stamina: 10, standingTackle: 8, ballControl: 8, reactions: 8, marking: 7, speed: 6, dribbling: 4, accel: 4 },
    RWB: { interception: 12, crossing: 12, slidingTackle: 11, shortPass: 10, stamina: 10, standingTackle: 8, ballControl: 8, reactions: 8, marking: 7, speed: 6, dribbling: 4, accel: 4 },
    LB: { slidingTackle: 14, interception: 12, standingTackle: 11, crossing: 9, stamina: 8, reactions: 8, marking: 8, shortPass: 7, ballControl: 7, speed: 7, accel: 5, heading: 4 },
    RB: { slidingTackle: 14, interception: 12, standingTackle: 11, crossing: 9, stamina: 8, reactions: 8, marking: 8, shortPass: 7, ballControl: 7, speed: 7, accel: 5, heading: 4 },
    CB: { slidingTackle: 17, marking: 14, interception: 13, standingTackle: 10, heading: 10, strength: 10, aggression: 7, reactions: 5, shortPass: 5, ballControl: 4, jumping: 3, speed: 2 },
    SW: { slidingTackle: 15, marking: 15, standingTackle: 15, heading: 10, strength: 10, interception: 8, aggression: 8, reactions: 5, shortPass: 5, ballControl: 5, jumping: 4 },
    GK: { gkDiving: 21, gkHandling: 21, gkPositioning: 21, gkReflexes: 21, reactions: 11, gkKicking: 5 }
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

  const savePlayer = () => {
    const player = {
      id: Date.now(),
      name, season, position, currentOVR, height, weight,
      preferredFoot, weakFoot, age, bodyType, stats,
    };
    const updated = [...savedPlayers, player];
    setSavedPlayers(updated);
    localStorage.setItem('fcPlayers', JSON.stringify(updated));
  };

  // 삭제 기능 추가
  const deletePlayer = (id, e) => {
    e.stopPropagation(); // 버튼 클릭 시 loadPlayer가 실행되지 않도록 차단
    if (window.confirm('이 선수를 삭제하시겠습니까?')) {
      const updated = savedPlayers.filter(p => p.id !== id);
      setSavedPlayers(updated);
      localStorage.setItem('fcPlayers', JSON.stringify(updated));
    }
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

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 카드 미리보기 (기존 스타일 유지) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="lg:w-1/3">
            <div className="rounded-[32px] overflow-hidden border border-emerald-400/30 p-1 shadow-2xl bg-zinc-950 sticky top-6">
              <div className="bg-black/70 backdrop-blur-xl rounded-[30px] p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-6xl font-extrabold leading-none">{currentOVR}</div>
                    <div className="text-xl font-bold mt-1">{position}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-emerald-300 font-bold">{season}</div>
                  </div>
                </div>
                <div className="h-10"></div>
                <div className="text-2xl font-bold tracking-wide mt-6 text-center">{name}</div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">키</div>
                    <div className="font-bold">{height} cm</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">몸무게</div>
                    <div className="font-bold">{weight} kg</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">왼발 / 오른발</div>
                    <div className="font-bold flex items-center justify-center gap-2 text-lg">
                      <span className="tracking-wide">
                        {preferredFoot === 'RIGHT' ? `${weakFoot}/5` : `5/${weakFoot}`}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-zinc-500 text-xs mb-1">나이</div>
                    <div className="font-bold">{age}세</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center col-span-2">
                    <div className="text-zinc-500 text-xs mb-1">체형</div>
                    <div className="font-bold">{bodyType}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:w-2/3">
            <div className="flex gap-4 mb-6">
              <button onClick={savePlayer} className="bg-emerald-400 hover:bg-emerald-300 transition-all text-black font-black px-6 py-4 rounded-2xl">
                선수 저장
              </button>
            </div>

            <div className="bg-zinc-950 border border-emerald-400/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl mb-6">
              <h1 className="text-4xl font-black mb-2 uppercase">FC ONLINE PLAYER BUILDER</h1>
              <p className="text-zinc-400">선수 스탯을 조절해 포지션별 오버롤을 계산하세요.</p>
            </div>

            {/* 입력 필드 섹션 (기존 스타일 유지) */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">선수 이름</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">시즌</label>
                <input value={season} onChange={(e) => setSeason(e.target.value)} placeholder="예: TOTY, ICON, WC22" className="w-full bg-zinc-900 rounded-xl p-3 outline-none" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">포지션</label>
                <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none">
                  {Object.keys(positions).map((pos) => <option key={pos}>{pos}</option>)}
                </select>
              </div>
            </div>

            {/* 신체 정보 입력 필드 */}
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">키(cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full bg-zinc-900 rounded-xl p-3 outline-none" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">몸무게(kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full bg-zinc-900 rounded-xl p-3 outline-none" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">주발/약발</label>
                <select value={preferredFoot} onChange={(e) => setPreferredFoot(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-2 outline-none mb-2">
                  <option value="RIGHT">오른발</option>
                  <option value="LEFT">왼발</option>
                </select>
                <select value={weakFoot} onChange={(e) => setWeakFoot(Number(e.target.value))} className="w-full bg-zinc-900 rounded-xl p-2 outline-none">
                  {[1,2,3,4,5].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">나이</label>
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full bg-zinc-900 rounded-xl p-3 outline-none" />
              </div>
              <div className="bg-zinc-950 rounded-2xl p-4 border border-emerald-400/10">
                <label className="text-sm text-zinc-400 block mb-2">체형</label>
                <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} className="w-full bg-zinc-900 rounded-xl p-3 outline-none">
                  <option>마름</option><option>보통</option><option>건장</option>
                </select>
              </div>
            </div>

            {/* 스탯 슬라이더 */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-emerald-400/10 shadow-2xl">
              <div className="flex flex-col gap-5">
                {Object.keys(stats).map((key) => (
                  <div key={key} className="bg-zinc-900 rounded-2xl p-4 border border-emerald-400/10">
                    <div className="flex justify-between items-center mb-3 gap-3">
                      <span className="font-medium">{labels[key]}</span>
                      <input type="number" min="1" max="200" value={stats[key]} onChange={(e) => setStats({...stats, [key]: Number(e.target.value)})}
                        className="w-20 bg-zinc-900 border border-emerald-400/30 rounded-lg px-2 py-1 text-right font-black text-xl text-emerald-300 outline-none appearance-none" />
                    </div>
                    <input type="range" min="1" max="200" value={stats[key]} onChange={(e) => setStats({...stats, [key]: Number(e.target.value)})} className="w-full accent-emerald-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* 저장된 선수 목록 (삭제 기능 추가된 부분) */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-emerald-400/10 mt-6 mb-6">
              <h2 className="text-2xl font-black mb-4">저장된 선수</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {savedPlayers.map((player) => (
                  <div key={player.id} className="relative group">
                    <button onClick={() => loadPlayer(player)} className="w-full bg-zinc-900 hover:bg-zinc-800 transition-all rounded-2xl p-4 border border-emerald-400/10 text-left">
                      <div className="flex justify-between items-center pr-8">
                        <div>
                          <div className="text-lg font-bold">{player.name}</div>
                          <div className="text-zinc-400 text-sm">{player.season} · {player.position}</div>
                        </div>
                        <div className="text-3xl font-black text-emerald-300">{player.currentOVR}</div>
                      </div>
                    </button>
                    {/* 삭제 버튼 추가 */}
                    <button 
                      onClick={(e) => deletePlayer(player.id, e)}
                      className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 transition-colors p-1"
                      title="삭제"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 전체 포지션 오버롤 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {Object.entries(positions).map(([pos, weights]) => (
                <div key={pos} className={`rounded-2xl p-5 border transition-all ${position === pos ? 'bg-emerald-400 text-black border-emerald-300 scale-105' : 'bg-zinc-900 border-white/10'}`}>
                  <div className="text-lg font-bold mb-2">{pos}</div>
                  <div className="text-4xl font-black">{calculateOVR(weights)}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
