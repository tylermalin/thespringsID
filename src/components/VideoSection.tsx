import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const VideoSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
          setVideoError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e.currentTarget.error);
    setVideoError(true);
  };
  const handleVideoLoaded = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6">
            Experience the Magic
          </h2>
          <p className="font-avenir text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Watch how our natural thermal waters create the perfect temperature for your relaxation and wellness journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {videoError ? (
              // Fallback when video fails to load
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <img 
                    src="/hero-hot-springs.jpg" 
                    alt="The Springs thermal waters" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white space-y-2">
                      <h3 className="text-xl font-semibold">Experience Our Thermal Waters</h3>
                      <p className="text-sm opacity-90">Video coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="/hero-hot-springs.jpg"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onLoadStart={() => console.log('Video loading started')}
                  onCanPlay={() => console.log('Video can play')}
                  onLoadedData={handleVideoLoaded}
                  onError={handleVideoError}
                >
                  <source src="/spring-thermal-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 cursor-pointer ${
                    isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:opacity-75'
                  }`}
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="font-canela text-2xl md:text-3xl font-normal text-primary mb-4">
              Ready to Experience It Yourself?
            </h3>
            <p className="font-avenir text-muted-foreground mb-8 max-w-xl mx-auto">
              Book your visit and discover the perfect temperature that awaits you at The Springs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate('/booking')}
              >
                Book Your Visit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-avenir border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => navigate('/experiences')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
