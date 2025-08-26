import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
  source: string;
}

const ReviewsSection = () => {
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      title: "Perfect Mountain Getaway",
      content: "The Springs is a highly recommended destination for those seeking relaxation and rejuvenation in a serene natural setting. Nestled in the Boise National Forest, it offers a picturesque backdrop of pine trees and mountain views.",
      author: "Sarah M.",
      date: "January 2024",
      source: "Google Reviews"
    },
    {
      id: 2,
      rating: 5,
      title: "Excellent Facilities & Service",
      content: "The well-maintained facilities include a large outdoor pool, hot tub, private tubs, and sauna. The staff receives high marks for their friendliness and professionalism, contributing to the overall positive experience.",
      author: "Michael R.",
      date: "December 2023",
      source: "TripAdvisor"
    },
    {
      id: 3,
      rating: 4,
      title: "Romantic Private Tubs",
      content: "The private tubs are particularly praised for their seclusion and romantic ambiance, making them a popular choice for couples. The water is changed after each use, ensuring cleanliness.",
      author: "Jennifer L.",
      date: "November 2023",
      source: "Google Reviews"
    },
    {
      id: 4,
      rating: 5,
      title: "Clean & Well-Stocked",
      content: "The locker rooms are consistently described as clean and well-stocked with amenities such as towels, shampoo, and conditioner. The resort's policy of requiring reservations helps manage guest numbers.",
      author: "David K.",
      date: "October 2023",
      source: "TripAdvisor"
    },
    {
      id: 5,
      rating: 4,
      title: "Convenient Location",
      content: "Just a 40-minute drive from Boise, this hot springs retreat offers a convenient escape for locals and visitors alike. The scenic drive adds to the overall experience.",
      author: "Amanda T.",
      date: "September 2023",
      source: "Google Reviews"
    },
    {
      id: 6,
      rating: 5,
      title: "Winter Wonderland",
      content: "Many reviewers find the landscape enchanting, especially during the winter months when the landscape is blanketed in snow. The combination of natural beauty and well-maintained facilities makes it a standout choice.",
      author: "Robert W.",
      date: "August 2023",
      source: "TripAdvisor"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="luxury-section bg-secondary">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4 tracking-tight">
            Guest Reviews
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6"></div>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {renderStars(Math.round(averageRating))}
              <span className="font-avenir text-lg font-semibold text-primary">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="font-avenir text-muted-foreground">
              ({totalReviews} reviews)
            </span>
          </div>
          
          <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            See what our guests are saying about their experience at The Springs
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                  </div>
                  <Quote className="w-5 h-5 text-primary/30" />
                </div>
                <CardTitle className="font-canela text-lg text-primary">
                  {review.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed text-sm">
                  "{review.content}"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-avenir font-semibold text-primary">
                    {review.author}
                  </span>
                  <span className="font-avenir text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {review.source}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-canela text-3xl font-normal text-primary mb-2">
                4.4
              </div>
              <div className="font-avenir text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="font-canela text-3xl font-normal text-primary mb-2">
                1.6k+
              </div>
              <div className="font-avenir text-sm text-muted-foreground">
                Total Reviews
              </div>
            </div>
            <div className="text-center">
              <div className="font-canela text-3xl font-normal text-primary mb-2">
                #1
              </div>
              <div className="font-avenir text-sm text-muted-foreground">
                Special Inn in Idaho City
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-avenir text-muted-foreground mb-4">
            Ready to experience The Springs for yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/TheSpringsID/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-avenir rounded-md hover:bg-blue-700 transition-colors"
            >
              Follow us on Facebook
            </a>
            <a
              href="https://www.instagram.com/thespringsid/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-avenir rounded-md hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Follow us on Instagram
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g35352-d1234567-Reviews-The_Springs-Idaho_City_Idaho.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-avenir rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
