"use client";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            {/* Spinner */}
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>

            {/* Text */}
            <div className="mt-4 text-center">
                <p className="text-gray-700">Loading...</p>
                <p className="text-sm text-gray-500 mt-1">Please wait while we prepare your content</p>
            </div>
        </div>
    );
}