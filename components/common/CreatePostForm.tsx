import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

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

	const fileInputRef = useRed<HTMLInputElement>(null);
	const router = useRouter();
	const [createPost] = useMutation(CREATE_POST);
}
