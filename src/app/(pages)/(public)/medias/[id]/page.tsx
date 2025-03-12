import MediaCard from '@/components/MediaCard/MediaCard';
import MediaPage from '@/components/MediaPage/MediaPage';

export default async function Media(context) {
	const { id } = await context.params; // Extraímos o 'id' da URL

	const config = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzAyZWYzMzQ0OTk0ZTZmZTMwY2JhY2Q5YjNiNTIzOCIsIm5iZiI6MTcxNDQ4MDk0My4yMTYsInN1YiI6IjY2MzBlNzJmYmVmYjA5MDEyM2Q5NWUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.knsSTmtUqlNV4MW15cx7FRcxQI-A0w7zuw4WR7sJfM4',
		},
		cache: 'no-store',
	};

	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}`,
		config
	);

	const mediaData = await response.json();

	return (
		<div className="">
			<MediaPage
				key={mediaData.id}
				id={mediaData.id}
				title={mediaData.original_title}
				overview={mediaData?.overview}
				cover={`https://image.tmdb.org/t/p/w500/${mediaData?.poster_path}`}
				date={mediaData?.release_date}
			/>
		</div>
	);
}
