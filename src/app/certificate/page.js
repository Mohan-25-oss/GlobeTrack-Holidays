"use client";
export default function Certificate() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-4">
            <div className="relative w-full max-w-4xl h-auto md:h-[600px] bg-gradient-to-b from-amber-50 to-amber-100 border-8 md:border-[20px] border-amber-800 p-6 md:p-10 rounded-lg shadow-2xl text-center">

                {/* Border pattern */}
                <div className="absolute inset-2 md:ins-4 border-2 border-amber-700 pointer-events-none"></div>

                {/* Ornamental corners */}
                <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-amber-700"></div>
                <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-amber-700"></div>
                <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-amber-700"></div>
                <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-amber-700"></div>

                {/* Decorative seal */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-radial-circle from-amber-100 via-amber-200 to-amber-300 border-8 border-double border-amber-700 rounded-full opacity-20"></div>

                {/* Gold leaf decorations */}
                <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-radial-circle from-yellow-300 to-transparent rounded-full opacity-60"></div>
                <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-radial-circle from-yellow-300 to-transparent rounded-full opacity-60"></div>
                <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-radial-circle from-yellow-300 to-transparent rounded-full opacity-60"></div>
                <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-radial-circle from-yellow-300 to-transparent rounded-full opacity-60"></div>

                {/* Header */}
                <div className="mb-6 mt-4">
                    <div className="logo mb-6">
                        <div className="text-2xl md:text-3xl font-bold text-amber-900 tracking-wider">GlobeTrack Holidays</div>
                        <div className="text-sm md:text-base text-amber-800 mt-1">আন্তর্জাতিক ভ্রমণ excellence</div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 uppercase tracking-wide">সার্টিফিকেট অফ এক্সিলেন্স</h1>
                    <div className="text-lg md:text-xl text-amber-800 italic">অসাধারণ ভ্রমণ অর্জনের স্বীকৃতিস্বরূপ</div>
                </div>

                {/* Body */}
                <div className="my-6 md:my-8">
                    <div className="text-xl md:text-2xl text-amber-800 mb-4">এই সার্টিফিকেটটি গর্বের সাথে প্রদান করা হল</div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-900 my-4 border-b-2 border-amber-700 pb-2 inline-block">সarah Johnson</div>

                    <div className="text-lg md:text-xl text-amber-800 leading-relaxed max-w-2xl mx-auto my-6">
                        বিশ্বব্যাপী ভ্রমণ পরিকল্পনা বিষয়ে অসাধারণ দক্ষতা প্রদর্শন এবং ক্লায়েন্টদেরকে
                        অবিস্মরণীয় ভ্রমণের অভিজ্ঞতা প্রদানের জন্য। আপনার অক্লান্ত পরিশ্রম এবং নিষ্ঠা
                        industry-তে একটি অনুকরণীয় standard প্রতিষ্ঠা করেছে।
                    </div>
                </div>

                {/* Signatures */}
                <div className="flex flex-col md:flex-row justify-around items-center mt-8 md:mt-12 gap-6 md:gap-0">
                    <div className="signature text-center w-40">
                        <div className="border-t-2 border-amber-700 w-full my-2"></div>
                        <div className="font-bold text-amber-900">Michael Roberts</div>
                        <div className="text-amber-800 italic">প্রধান নির্বাহী কর্মকর্তা</div>
                    </div>

                    <div className="signature text-center w-40">
                        <div className="border-t-2 border-amber-700 w-full my-2"></div>
                        <div className="font-bold text-amber-900">তারিখ: জুন ১৫, ২০২৩</div>
                        <div className="text-amber-800 italic">GlobeTrack Holidays</div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 md:mt-12 text-amber-800">
                    <div>GlobeTrack Holidays International কর্তৃক ইস্যুকৃত</div>
                    <div className="font-mono text-sm mt-1 text-amber-900">সার্টিফিকেট নং: GTH-2023-08942</div>
                </div>
            </div>
        </div>
    );
}