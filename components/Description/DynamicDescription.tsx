import React from "react";

const DynamicDescription = ({ text }: { text: string }) => {
  const processText = (content: string): React.ReactNode[] => {
    const segments: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*|\*.*?\*|__.*?__)|(\d+\.\s.*)/g; // Tambahkan deteksi angka diikuti titik dan spasi
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Text sebelum match
      if (match.index > lastIndex) {
        segments.push(content.slice(lastIndex, match.index));
      }

      // Proses matched text
      const matchedText = match[0];

      if (matchedText.startsWith("**")) {
        segments.push(
          <strong key={match.index} className="font-bold">
            {matchedText.slice(2, -2)}
          </strong>
        );
      } else if (matchedText.startsWith("*")) {
        segments.push(
          <em key={match.index} className="italic">
            {matchedText.slice(1, -1)}
          </em>
        );
      } else if (matchedText.startsWith("__")) {
        segments.push(
          <u key={match.index} className="underline">
            {matchedText.slice(2, -2)}
          </u>
        );
      } else if (/^\d+\.\s/.test(matchedText)) {
        // Deteksi daftar bernomor
        segments.push(
          <li key={match.index} className="list-decimal ml-6">
            {matchedText.replace(/^\d+\.\s/, "")} {/* Hapus nomor dan titik */}
          </li>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Sisa text setelah match terakhir
    if (lastIndex < content.length) {
      segments.push(content.slice(lastIndex));
    }

    return segments;
  };

  return (
    <div className="text-gray-800 leading-relaxed">
      {text.split("\n").map((paragraph, index) => {
        // Cek apakah paragraf mengandung daftar bernomor
        const isNumberedList = /^\d+\.\s/.test(paragraph);

        return (
          <React.Fragment key={`p-${index}`}>
            {isNumberedList ? (
              <ol className="list-decimal pl-6" start={parseInt(paragraph.split("\n")[0].match(/^\d+/)![0], 10)}>
                {paragraph.split("\n").map((line, lineIndex) => {
                  if (/^\d+\.\s/.test(line)) {
                    return (
                      <li key={`line-${lineIndex}`} className="mb-2">
                        <span className="ml-1">{line.replace(/^\d+\.\s/, "")}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ol>
            ) : (
              <p key={`p-${index}`} className="mb-4">
                {processText(paragraph)}
              </p>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DynamicDescription;