import { CREATE_POST } from "@/graphql/mutations";
import createPostPage from "@/pages/create-post";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface MediaPreview {
	url: string;
	type: 'image' | 'video';
	file: File;
}

const CreatePostForm = ({ onSuccess, asPage = false }: { onSuccess?: () => void; asPage?: boolean }) => {
	const [content, setContent] = useState('');
	const [mediaPreviews, setMediaPreviews] = useState<MediaPreview[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState('');

	//const fileInputRef = useRed<HTMLInputElement>(null);
	const router = useRouter();
	const [createPost] = useMutation(CREATE_POST);

	{/*change styling if it is desplayed as its own page*/ }
	return (
		< div className={`bg-white dark:bg-gray-800 rounded-lg shadow ${asPage ? 'p-6 max-w-2xl mx-auto mt-8' : 'p-4'}`
		}>
			{asPage && <h1 className="text-2xl font-bold mb-6 dark:text-white">Create Post</h1>}

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="What's new?"
						className="w-full p-3 border border-gray-400 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
						rows={5}
						required
					/>
				</div>
				{/*TODO: add media preview support*/}
				<div className="flex justify-between items-center">

					{/*TODO: add media button*/}
					<button
						type="submit"
						disabled={isSubmitting || !content.trim()}
						className="bg-blue-500 hove:bg-blue-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
					>

						{isSubmitting ? (
							<>
								<FaSpinner className="animate-spin mr-2" />
								Posting...
							</>
						) : (
							'Post'
						)}
					</button>

					{error && (
						<div className="mt-3 text-red-500 text-sm">{error}</div>
					)}
				</div>
			</form >
		</div >
	)
};

export default CreatePostForm;
