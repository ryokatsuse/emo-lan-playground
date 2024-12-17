"use client";

import React, { useState } from "react";
import init, { compile_to_html } from "emo-lan";
import { Button } from "@/_components/button/button";
import { Textarea } from "@/_components/textarea/textarea";

export const Playground: React.FC = () => {
  const [emojiCode, setEmojiCode] = useState("");
  const [htmlOutput, setHtmlOutput] = useState("");

  const handleCompile = async () => {
    await init();
    const html = compile_to_html(emojiCode);
    setHtmlOutput(html);
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-xl font-bold mb-2">コードの入力</h2>
        <p className="text-sm text-gray-600 mb-4">
          コードサンプル：📄🔤Hello World🔤🖼️(表示させたいURLを記述してください)
        </p>
        <Textarea
          className="flex-1 p-2 font-mono text-sm"
          value={emojiCode}
          onChange={(e) => setEmojiCode(e.target.value)}
          placeholder="コードを入力してください"
        />
        <Button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
          disabled={!emojiCode}
          onClick={handleCompile}
        >
          コードをコンパイルする
        </Button>
      </div>
      <div className="flex-1 p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">コンパイル結果</h2>
        <p className="text-sm text-gray-600 mb-4">
          以下にコンパイル結果が表示されます。
        </p>
        <div
          className="p-2 bg-gray-200 min-h-20 rounded font-mono text-sm whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: htmlOutput }}
        ></div>
        <ul className="list-disc mt-8 list-inside text-sm text-gray-600">
          <li>
            絵文字の理解を深めるために
            <a
              className="text-blue-500"
              href="https://ja.wikipedia.org/wiki/Unicode%E3%81%AEEmoji%E3%81%AE%E4%B8%80%E8%A6%A7"
            >
              UnicodeのEmojiの一覧
            </a>
            も参照してください。
          </li>
          <li>絵文字でコーディングできる種類は増やしていく予定です！</li>
        </ul>
      </div>
    </div>
  );
};

// 📄🔤infixer🔤🖼️(https://pbs.twimg.com/profile_images/1322943302497259521/XeRehva-_400x400.jpg)
