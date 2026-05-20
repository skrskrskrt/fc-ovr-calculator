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

  const [stats, setStats] = React.useState({
    speed: 100, accel: 100, finishing: 100, shotPower: 100, longShot: 100, positioning: 100, volley: 100, penalty: 100,
    shortPass: 100, vision: 100, crossing: 100, longPass: 100, freeKick: 100, curve: 100, dribbling: 100, ballControl: 100,
    agility: 100, balance: 100, reactions: 100, marking: 100, standingTackle: 100, interception: 100, heading: 100,
    slidingTackle: 100, strength: 100, stamina: 100, aggression: 100, jumping: 100, composure: 100,
    gkDiving: 100, gkHandling: 100, gkKicking: 100, gkReflexes: 100, gkPositioning: 100
  });

  const [position, setPosition] = React.useState('ST');
  const [name, setName] = React.useState('커스텀 선수');

  const calculateOVR = (weights) => {
    let total = 0;
    let totalWeight = 0;
    for (const stat in weights) {
      total += stats[stat] * weights[stat];
      totalWeight += weights[stat];
    }
    return Math.round(total / totalWeight);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 상단 섹션: 현재 선수 카드 및 설정 */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-zinc-900 p-6 rounded-3xl border border-emerald-500/30 text-center">
            <div className="text-6xl font-black text-emerald-400 mb-2">{calculateOVR(positions[position])}</div>
            <div className="text-2xl font-bold mb-4">{position}</div>
            <div className="text-xl">{name}</div>
          </motion.div>

          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-2xl">
                <label className="text-xs text-zinc-500 block mb-1">선수명</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent w-full outline-none font-bold text-lg" />
              </div>
              <div className="bg-zinc-900 p-4 rounded-2xl">
                <label className="text-xs text-zinc-500 block mb-1">메인 포지션</label>
                <select value={position} onChange={(e) => setPosition(e.target.value)} className="bg-transparent w-full outline-none font-bold text-lg">
                  {Object.keys(positions).map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <p className="text-zinc-500 text-sm italic">* 스탯 바를 움직이면 모든 포지션 오버롤이 실시간으로 계산됩니다.</p>
          </div>
        </div>

        {/* 중간 섹션: 스탯 조절기 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(stats).map((key) => (
            <div key={key} className="bg-zinc-900/50 p-4 rounded-xl border border-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-400">{labels[key]}</span>
                <span className="font-bold text-emerald-300">{stats[key]}</span>
              </div>
              <input type="range" min="1" max="150" value={stats[key]} 
                onChange={(e) => setStats({...stats, [key]: Number(e.target.value)})}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
              />
            </div>
          ))}
        </div>

        {/* 하단 섹션: 모든 포지션 오버롤 (사용자님이 요청하신 부분) */}
        <div className="mt-12">
          <h2 className="text-2xl font-black mb-6 border-l-4 border-emerald-500 pl-4 uppercase">All Positions OVR</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
            {Object.entries(positions).map(([pos, weights]) => (
              <motion.div 
                key={pos}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-2xl border text-center transition-colors ${
                  position === pos ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-zinc-900 border-white/10'
                }`}
              >
                <div className="text-xs font-bold opacity-70 mb-1">{pos}</div>
                <div className="text-2xl font-black">{calculateOVR(weights)}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
