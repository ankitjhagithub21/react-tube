
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    return (
        <div className='container mx-auto p-4'>
            <iframe
            width={"100%"}
            height={400}
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allowFullScreen
        />
        </div>

    )
}

export default Watch