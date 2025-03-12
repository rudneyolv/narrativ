'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MediaCard from '../MediaCard/MediaCard';

interface MediaSlideProps {
	medias: object;
}

export default function MediaSlide({ medias }: MediaSlideProps) {
	return (
		<Swiper spaceBetween={15} navigation loop grabCursor slidesPerView={8}>
			{medias &&
				medias.map(media => (
					<SwiperSlide key={media.id}>
						<MediaCard
							key={media.id}
							id={media.id}
							title={media.original_title}
							overview={media?.overview}
							cover={`https://image.tmdb.org/t/p/w500/${media?.poster_path}`}
							date={media?.release_date}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
