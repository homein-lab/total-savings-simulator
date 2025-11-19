import React, { useState, useCallback } from 'react';

const FileUploader = ({ onUploadComplete }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const processFile = (file) => {
        setIsScanning(true);
        setUploadedFile(file);

        // Mock scanning process
        setTimeout(() => {
            setIsScanning(false);
            // Mock extracted value
            const mockValue = 2500;
            onUploadComplete(mockValue);
        }, 2000);
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            processFile(files[0]);
        }
    }, []);

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            processFile(files[0]);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative w-full h-48 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden
        ${isDragging
                    ? 'border-brand-cyan bg-brand-cyan/10'
                    : 'border-gray-300 bg-brand-light hover:border-brand-cyan/50'
                }
      `}
        >
            <input
                type="file"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                accept=".pdf,.jpg,.png,.jpeg"
            />

            {isScanning ? (
                <div className="flex flex-col items-center animate-pulse">
                    <div className="w-12 h-12 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-brand-navy font-bold">Analizando factura...</p>
                    <p className="text-xs text-gray-500">{uploadedFile?.name}</p>
                </div>
            ) : uploadedFile ? (
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 text-green-600 text-2xl">
                        ✓
                    </div>
                    <p className="text-brand-navy font-bold">Factura procesada</p>
                    <p className="text-xs text-gray-500 mb-2">{uploadedFile.name}</p>
                    <p className="text-xs text-brand-cyan font-bold">Monto detectado: $2,500 MXN</p>
                </div>
            ) : (
                <div className="flex flex-col items-center text-center p-4">
                    <div className="text-4xl mb-3 text-gray-400">📄</div>
                    <p className="text-brand-navy font-bold mb-1">Arrastra tu factura aquí</p>
                    <p className="text-xs text-gray-500">o haz clic para seleccionar (PDF, JPG, PNG)</p>
                    <p className="text-[10px] text-gray-400 mt-2">Soporta recibos de Luz, Agua y Gas</p>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
