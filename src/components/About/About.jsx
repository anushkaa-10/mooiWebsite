import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Explore the World with Ease
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Our travel agency app is your one-stop solution for all your travel needs, whether you're planning a relaxing getaway, an adventurous expedition, or a business trip. With user-friendly features and comprehensive services, we strive to make your travel experience seamless and memorable.


                        </p>
                        <p className="mt-4 text-gray-600">
                        Search and Book Flights: Browse through a wide range of airlines and destinations, compare prices, and book your flights hassle-free.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Discover Accommodations: Explore a curated selection of hotels, resorts, and vacation rentals worldwide. Filter by location, price range, amenities, and reviews to find the perfect accommodation for your stay.                        </p>
                        <p className="mt-4 text-gray-600">
                        Plan Activities: Enhance your travel itinerary with exciting activities and tours. From city tours to outdoor adventures, our app offers a variety of experiences to suit every traveler's interests.                        </p>
                        <p className="mt-4 text-gray-600">
                        Manage Itineraries: Keep track of your travel plans with our itinerary management feature. View your flight details, hotel reservations, and activity bookings in one convenient place.                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}