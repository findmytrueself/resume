'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition ease-in-out delay-300 py-8 pb-12 m-auto max-w-[50rem] antialiased whitespace-normal`}
    >
      <section className="py-8 px-8">
        <h1 className="mb-8 text-7xl max-md:text-4xl font-bold leading-tight">
          <p>안녕하세요,</p>
          <p>웹 프론트엔드 개발자</p>
          <p>임훈입니다.</p>
        </h1>
        <h2 className="leading-normal text-4xl max-md:text-2xl">
          <p>
            무궁무진한 웹 생태계에서, 웹을 넘은 세상을 꿈꾸며, 웹과 함께
            성장하고 있습니다.
          </p>
          <p>
            유저의 입장에서 최적의 인터페이스를 개발하고, 좋은 제품을
            벤치마킹하여 개발을 합니다.
          </p>
          <p>소통과 협업을 중시하며, 가장 좋은 결과를 얻기 위해 노력합니다.</p>
          <p>
            주도적으로 업무를 진행하며, 스스로 책임 질 수 있는 환경을
            선호합니다.
          </p>
        </h2>
      </section>

      <section className="py-8 px-8 pt-0">
        <h3 className="text-5xl max-md:text-3xl font-medium">
          Work Experience
        </h3>

        <div className="py-8 px-0 flex border-b border-gray-400">
          <div className="basis-72 shrink-0">
            <h4 className="mb-1 flex text-3xl max-md:text-2xl font-medium items-end">
              Aergo <p className="text-xs ml-2">Project Member</p>
            </h4>
            <p className="mb-1 text-xl">Web3 Frontend Developer</p>
            <p>2023.01 - 현재</p>
          </div>

          <div>
            <h5 className="text-2xl font-medium mb-2">Description</h5>
            <p className="mb-2">
              아르고 블록체인을 활용하여 서비스 중인 프론트엔드 오픈소스의
              유지보수를 담당하고 있습니다.
            </p>
            <h5 className="text-2xl font-medium mb-2">What did I do</h5>
            <ul className="list-disc list-inside">
              <li>
                Aergo Connect 3.0, 크롬익스텐션 전용 개인지갑 개발 및 배포
              </li>
              <li>Aergo Scan, UI 개선 및 개발자 인터렉티브 기능 개선</li>
              <li>Aergo Snaps, Non-EVM 블록체인 Metamask 연동 플랫폼</li>
              <li>아르고 개발자 및 테스팅 도구 유지보수</li>
            </ul>
          </div>
        </div>

        <div className="py-8 px-0 flex border-b border-gray-400">
          <div className="basis-72 shrink-0">
            <h4 className="mb-1 text-3xl max-md:text-2xl font-medium">
              Blocko
            </h4>
            <p className="mb-1 text-xl">Frontend Developer</p>
            <p>2022.01 - 현재</p>
          </div>

          <div>
            <h5 className="text-2xl font-medium mb-2">Description</h5>
            <p className="mb-2">블록체인 서비스 개발(SI)</p>
            <h5 className="text-2xl font-medium mb-2">What did I do</h5>
            <ul className="list-disc list-inside">
              <li>
                EVM 기반의 메인넷(Polygon, Avalanche)와 Non-EVM(Aptos, Aergo)을
                Metamask 지갑 연동 및 개인서명과 트랜잭션 전송
              </li>
              <li>GEMPay, Web3 연동</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-0 px-8">
        <h5 className="mb-4 text-5xl max-md:text-3xl font-medium">
          Tech Stack
        </h5>
        <p className="text-xl">
          #Typescript, #Vue, #React, #Next.js, #RTK, #React Query
        </p>
        <p className="text-xl">#Ethereum #Web3 #Wagmi</p>
      </section>
    </main>
  )
}
