import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { getActiveAlertsForPage, AlertConfig } from '@/utils/alertConfig';

interface AlertSectionProps {
  pageName: string;
}

const AlertSection: React.FC<AlertSectionProps> = ({ pageName }) => {
  const navigate = useNavigate();
  const activeAlerts = getActiveAlertsForPage(pageName);

  if (activeAlerts.length === 0) return null;

  const renderAlert = (alert: AlertConfig) => {
    const handleCtaClick = () => {
      if (alert.ctaLink) {
        navigate(alert.ctaLink);
      }
    };

    return (
      <section 
        key={alert.id}
        className={`luxury-section ${alert.styling.backgroundColor} ${alert.styling.borderColor ? `border-l-4 ${alert.styling.borderColor}` : ''}`}
      >
        <div className="luxury-container">
          <div className="text-center">
            <h2 className={`font-canela text-3xl md:text-4xl font-normal ${alert.styling.textColor} mb-4 tracking-tight`}>
              {alert.title}
            </h2>
            <div className={`font-avenir text-lg ${alert.styling.textColor} font-medium mb-6 max-w-4xl mx-auto leading-relaxed`}>
              {alert.message.split('. ').map((sentence, index, array) => (
                <span key={index}>
                  {sentence}
                  {index < array.length - 1 && '. '}
                  {index === 0 && array.length > 1 && <br className="hidden md:block" />}
                </span>
              ))}
            </div>
            {alert.ctaText && alert.ctaLink && (
              <Button 
                className={`
                  font-avenir font-medium px-8 py-3 text-lg rounded-lg transition-all duration-300
                  ${alert.styling.buttonColors.background} 
                  ${alert.styling.buttonColors.text}
                  ${alert.styling.buttonColors.border ? `border-2 ${alert.styling.buttonColors.border}` : ''}
                  hover:${alert.styling.buttonColors.hover.background} 
                  hover:${alert.styling.buttonColors.hover.text}
                  transform hover:scale-105 shadow-lg hover:shadow-xl
                `}
                onClick={handleCtaClick}
              >
                {alert.ctaText}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {activeAlerts.map(renderAlert)}
    </>
  );
};

export default AlertSection;
