import { Post } from "@/interfaces";
import { useState } from "react";
import { AiFillApi } from "react-icons/ai";
import { FaHeart, FaComment, FaRetweet, FaShare } from 'react-icons/fa';


interface PostCardProps {
	post: Post;
	onLike: (postId: string) => void;
	onComment: (postId: string) => void;
	onShare: (postId: string) => void;
}


const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment, onShare }) => {
	const [isLiked, setIsLiked] = useState(post.liked);
	const [likeCount, setLikeCount] = useState(post.likes);


	return (
		<div className="post-catd bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition-shadow">
			<div className="flex items-start">
				<img
					src={post.author.avatar}
					alt={post.author.name}
					className="w-12 h-12, rounded-full mr-3"
				/>

				<div className="flex-1">
					{/*USER DETS*/}
					<div className="flex items-center">
						<h3 className="font-bold">{post.author.name}</h3>
						{post.author.isVerified && (
							<span className="ml-1 text-blue-500">✓</span>
						)}

						<span className="text-gray-500 ml-2">@{post.author.username}</span>
						<span className="text-gray-500 mx-1">.</span>
						<span className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
					</div>

					<p className="mt-1 mb-2"> {post.content}</p>

					{/*MEDIA*/}
					{post.media && post.media.length > 0 && (
						<div className="media-container my-2 rounded-lg overflow-hidden">
							{post.media[0].type === 'image' && (
								<img src={post.media[0].url}
									alt={post.media[0].alt || ''}
									className="max-h-96 w-full object-cover"
								/>
							)}
							{/*TODO: Add video/gif support */}
						</div>
					)}


					{/*Comments/shares/likes*/}
				</div>
			</div>
		</div>
	)
}
