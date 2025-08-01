import { Post } from "@/interfaces";
import { useState } from "react";
import { FaHeart, FaComment, FaRetweet, FaShare } from 'react-icons/fa';

import Image from "next/image";

interface PostCardProps {
	post: Post;
	onLike: (postId: string) => void;
	onComment: (postId: string) => void;
	onShare: (postId: string) => void;
}


const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment, onShare }) => {
	const [isLiked, setIsLiked] = useState(post.liked);
	const [likeCount, setLikeCount] = useState(post.likes);

	const handleLike = () => {
		setIsLiked(!isLiked);
		setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
		onLike(post.id);
	}

	return (
		<div className="post-catd bg-white rounded-lg shadow p-4 mb-4 hover:shadow-md transition-shadow">
			<div className="flex items-start">
				<Image
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
					<div className="flex justify-between mt-3 text-gray-500">
						<button
							onClick={() => onComment(post.id)}
							className="flex items-center hover:text-blue-500"
						>
							<FaComment className="mr-1" />
							<span>{post.comments.length}</span>
						</button>

						<button
							onClick={() => onShare(post.id)}
							className="flex items-center hover:text-green-500"
						>
							<FaRetweet className="mr-1" />
							<span>{post.shares}</span>
						</button>
						<button
							onClick={handleLike}
							className={`flex items-center ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}
						>
							<FaHeart className="mr-1" />
							<span>{likeCount}</span>
						</button>
						<button
							onClick={() => onShare(post.id)}
							className="flex items-center hover:text-purple-500">
							<FaShare className="mr-1" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default PostCard;
