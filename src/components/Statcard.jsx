import React from 'react';

const StatCard = ({
  title,
  value,
  subtitle,
  subtitleColor,
  bgColor,
  growth,
  additionalInfo,
}) => {
  return (
    <div className="rounded-lg p-[12px] shadow-sm" style={{ backgroundColor: bgColor }}>
      <h3 className="text-gray-600 mb-2 font-medium">{title}</h3>
      <div className="flex items-end">
        <div>
          <p className="text-4xl font-bold text-navy-900">{value}</p>
          {subtitle && (
            <p className="text-sm mt-1" style={{ color: subtitleColor }}>
              {subtitle}
            </p>
          )}
          {additionalInfo && (
            <div className="mt-2 text-sm text-gray-500">
              <p>{additionalInfo.men} Men</p>
              <p>{additionalInfo.women} Women</p>
            </div>
          )}
        </div>
        {growth && (
          <div className="text-right">
            <div className="flex items-center text-green-500 text-sm">
              <img src="graph.png"  alt="sfdsdf" className="w-[105px] h-[111px] ml-10"/>
              
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
