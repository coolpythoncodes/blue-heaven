import { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const useSubscribeToNewsletter = () => {
    const [isLoading, setIsLoading] = useState(false)

    const inputElement = useRef<HTMLInputElement>(null)

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputElement?.current?.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();
        if (error) {
            setIsLoading(false)
            toast.error("Something went wrong. Please try again later.")
            return;
        }
        if (inputElement.current) {
            inputElement.current.value = '';
        }
        setIsLoading(false)
        toast.success("Success! 🎉  You've been added to the list!.")

    }
    return {
        isLoading, inputElement, handleSubscribe
    }
}

export default useSubscribeToNewsletter