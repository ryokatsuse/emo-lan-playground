import { Playground } from "@/_components/playground/playground";
import { Header } from "@/_components/header/header";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col h-screen bg-gray-100">
          <Header title="Emo-Lan Playground" />
          <Playground />
        </div>
      </main>
    </div>
  );
}
