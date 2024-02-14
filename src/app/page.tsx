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
        <h1 className="mb-8 text-6xl max-md:text-4xl font-bold leading-tight">
          <p>안녕하세요,</p>
          <p>웹 프론트엔드 개발자</p>
          <p>임훈입니다.</p>
        </h1>
        <h2 className="leading-snug text-3xl max-md:text-2xl">
          <p>
            웹을 기반으로 한 더 큰 세계를 상상하며, 웹 기술의 발전과 함께
            성장하고 있습니다.
          </p>
          <p>
            사용자의 관점에서 최적의 인터페이스를 개발하고, 우수한 제품을
            벤치마킹하여 개발하는 데 주력합니다.
          </p>
          <p>소통과 협업을 우선시하며, 최상의 결과를 얻기 위해 노력합니다.</p>
          <p>
            프로젝트 단위로 책임자를 지정하여 주도적으로 업무를 이끌어 나갈 수
            있는 환경을 선호합니다.
          </p>
        </h2>
      </section>

      <section className="py-8 px-8 pt-0">
        <h3 className="text-5xl max-md:text-3xl font-medium">
          Work Experience
        </h3>

        <div className="py-8 px-0 flex max-md:flex-col border-b border-gray-400">
          <div className="basis-72 max-md:basis-24 shrink-0">
            <h4 className="mb-1 flex text-3xl max-md:text-2xl font-medium items-end">
              Aergo <p className="text-xs ml-2">Project Member</p>
            </h4>
            <p className="mb-1 text-xl">Web3 Frontend Developer</p>
            <p>2023.01 - 현재</p>
          </div>

          <div>
            <h5 className="text-xl font-medium mb-2">Description</h5>
            <p className="mb-2">
              아르고 블록체인에서 운영 중인 프론트엔드 오픈소스 기능 개발 및
              유지보수를 담당.
            </p>
            <h5 className="text-xl font-medium mb-2">What did I do</h5>
            <ul className="marker:text-blue-400 list-disc">
              <li>
                Aergo Connect 3.0, 크롬익스텐션 전용 개인지갑 개발 및 배포
              </li>
              <li>Aergo Scan, UI 개선 및 개발자 인터렉티브 기능 개선</li>
              <li>Aergo Snaps, Non-EVM 블록체인 Metamask 연동 플랫폼</li>
              <li>아르고 개발자 및 테스팅 도구 유지보수</li>
            </ul>
          </div>
        </div>

        <div className="py-8 px-0 flex max-md:flex-col border-b border-gray-400">
          <div className="basis-72 max-md:basis-24 shrink-0">
            <h4 className="mb-1 text-3xl max-md:text-2xl font-medium">
              Blocko
            </h4>
            <p className="mb-1 text-xl">Frontend Developer</p>
            <p>2022.01 - 현재</p>
          </div>

          <div>
            <h5 className="text-xl font-medium mb-2">Description</h5>
            <p className="mb-2">블록체인 서비스 개발(SI)</p>
            <h5 className="text-xl font-medium mb-2">What did I do</h5>
            <ul className="marker:text-blue-400 list-disc">
              <li>
                EVM 기반의 메인넷(Polygon, Avalanche)와 Non-EVM(Aptos, Aergo)을
                Metamask 지갑 연동 및 개인서명과 트랜잭션 전송
              </li>
              <li>GEMPay, Web3 연동</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 pt-0">
        <div className="border-b border-gray-400">
          <h5 className="mb-4 text-5xl max-md:text-3xl font-medium">Skills</h5>
          {/* <p className="text-xl">
            #Typescript #Vue #React #Next.js #RTK #React Query
          </p> */}
          <h4 className="text-2xl">#Javascript</h4>
          <ul className="py-2 marker:text-blue-400 list-disc">
            <li>ES6이상의 최신 문법에 익숙합니다.</li>
            <li>안정적인 개발을 위해, Typescript를 사용합니다.</li>
            <li>비동기 방식을 이해합니다.</li>
          </ul>

          <h4 className="text-2xl">#React</h4>
          <ul className="py-2 marker:text-blue-400 list-disc">
            <li>React hooks와 함수형 컴포넌트를 사용하여 개발합니다.</li>
            <li>공통 로직을 hooks로 분리하여, 사용합니다.</li>
            <li>아토믹 디자인 패턴을 통해, UI개발을 합니다.</li>
            <li>Jest를 사용하여 테스트코드를 작성할 수 있습니다.</li>
          </ul>

          <h4 className="text-2xl">#Next.JS</h4>
          <ul className="py-2 marker:text-blue-400 list-disc">
            <li>CSR과 SSR의 차이를 이해하고, 적절히 사용합니다.</li>
            <li>
              최신버전(v14)의 Next.JS의 컨셉을 이해하며, 앱 라우트 방식으로
              개발합니다.
            </li>
            <li>아토믹 디자인 패턴을 통해, UI개발을 합니다.</li>
            <li>Jest를 사용하여 테스트코드를 작성할 수 있습니다.</li>
          </ul>

          <h4 className="text-2xl">#Ethereum</h4>
          <ul className="py-2 marker:text-blue-400 list-disc">
            <li>
              EVM 기반의 메인넷에 Web3 api로 지갑연동과 트랜잭션 전송을
              구축했습니다.
            </li>
            <li>
              Non-EVM(Aergo)을 연결하는 Metamask Snaps 개발 경험이 있습니다.
            </li>
          </ul>

          <p className="mb-8 text-xl">#Chrome Extension #PWA</p>
        </div>
      </section>

      <section className="py-8 px-8 pt-0">
        <div className="border-b border-gray-400">
          <h5 className="mb-4 text-5xl max-md:text-3xl font-medium">Contact</h5>
          <ul className="marker:text-blue-400 list-disc">
            <li className="cursor-pointer w-0 hover:text-blue-600 hover:transition-opacity hover:underline">
              <a href="mailto:load1999@gmail.com">Email</a>
            </li>
            <li className="cursor-pointer w-0 hover:text-blue-600 hover:transition-opacity hover:underline">
              <a href="https://findmytrueself.github.io">Blog</a>
            </li>
            <li className="cursor-pointer w-0 hover:text-blue-600 hover:transition-opacity hover:underline">
              <a href="https://github.com/findmytrueself">Github</a>
            </li>
            <li className="mb-8 cursor-pointer w-0 hover:text-blue-600 hover:transition-opacity hover:underline">
              <a href="https://www.linkedin.com/in/findmytrueself">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
