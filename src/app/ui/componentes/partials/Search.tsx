import { Search } from 'lucide-react'

export function SearchMain() {
  return (
    <div className="w-full flex relative">
      <input type="text" name="search" id="search" placeholder="Search" className="p-2.5 w-full bg-slate-50 rounded-full border-2 border-sky-100 focus:outline-rmGreen relative h-full" /> 
      <Search className="absolute right-5 top-2.5 text-rmGreen opacity-80" width={20} />
    </div>
  )
}
