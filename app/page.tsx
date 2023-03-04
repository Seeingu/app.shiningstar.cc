'use client'

import { useRequestApps } from './request'
import { AppIntro } from './ui/AppIntro'


const AppsIntro = () => {
  const apps = useRequestApps()

  return <div>
    {apps.map(app =>
      <AppIntro key={app.name} app={app} />
    )}

  </div>
}

export default function Home() {
  return (
    <div >
      <AppsIntro />


    </div >
  )
}
