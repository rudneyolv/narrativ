'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MediaCard from '../MediaCard/MediaCard';

interface MovieSlideProps {
	movies: object;
}

export default function MovieSlide({ movies }: MovieSlideProps) {
	return (
		<Swiper spaceBetween={15} navigation loop grabCursor slidesPerView={8}>
			{movies &&
				movies.map(movie => (
					<SwiperSlide key={movie.id}>
						<MediaCard
							key={movie.id}
							id={movie.id}
							title={movie.original_title}
							overview={movie?.overview}
							cover={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
							date={movie?.release_date}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
