import React, { useState, useEffect } from 'react';
import { statsService } from '../services/statsService';

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await statsService.get();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError('Failed to load stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-12 bg-slate-700 rounded w-24 mx-auto mb-2"></div>
                <div className="h-4 bg-slate-700 rounded w-32 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return null;
  }

  const statsArray = [
    { value: `${stats.countries}+`, label: 'Countries Supported' },
    { value: stats.users, label: 'Active Users' },
    { value: stats.transactionVolume, label: 'Transaction Volume' },
    { value: stats.support, label: 'Customer Support' }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsArray.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;