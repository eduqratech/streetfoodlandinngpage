
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Placeholder: React.FC = () => {
    const { page } = useParams();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-[#F5F5F0] p-8">
            <h1 className="text-4xl serif italic text-[#C5A059] mb-4">Coming Soon</h1>
            <p className="text-xl opacity-60 mb-8 tracking-widest uppercase">
                {page ? page.replace(/-/g, ' ') : 'Page Under Construction'}
            </p>
            <p className="text-sm opacity-40 mb-12 max-w-md text-center">
                This button is functionally wired. The content for this section is currently being curated by our digital artisans.
            </p>
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-8 py-3 border border-[#C5A059] text-[#C5A059] text-xs tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-white transition-all"
            >
                <ArrowLeft size={16} /> Return Home
            </button>
        </div>
    );
};

export default Placeholder;
