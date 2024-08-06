import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Andrew!</h2>
        <p>Terça-feira 06 agosto </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca....." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[180px] w-full rounded-xl">
          <Image
            alt="Agende nos melhores com o FSW Barber"
            src="/Banner.svg"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
