'use client'
export default function NavBar(){
    return (
        <nav className="h-[70px] w-full xl:w-3/4 sticky top-0  md:top-2.5 z-40 md:py-2.5 max-w-landing-width mx-auto flex justify-between items-center md:rounded-full border-b md:border border-[rgba(0,0,0,0.2)]  p-2 backdrop-blur-md bg-[#f7fafb]/80">
            <ul className="w-1/2">
            </ul>
            {/* <ul className="w-1/3"></ul> */}
            <ul className="w-1/2 md:w-fit ml-10">
                <li className="flex gap-2.5 p-2.5 xl:p-3.5 rounded-lg md:rounded-full bg-blue-500 items-center justify-center" onClick={()=>window.location.href='#ours-codes'}>
                    <span className="text-white">Le canal</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-telegram" viewBox="0 0 16 16" onClick={()=>window.location.href='https://t.me/+2-9GuK1WJOFjMGM8'}>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                  </svg>
                </li>
            </ul>
        </nav>
    )
}