import esbuildLogo from '../../public/icons/esbuild.svg';
import electronLogo from '../../public/icons/electron.svg';
import nextLogo from '../../public/next.svg';

export default function Home(): JSX.Element {
  return (
    <>
      <div className="App">
        <div>
          <div
            className="external"
            aria-label="electron-link"
            onClick={() => window.myAPI.openExternal('https://www.electronjs.org/')}
          >
            <img src={electronLogo} className="logo electron" alt="Electron logo" />
          </div>
          <div
            className="external"
            aria-label="esbuild-link"
            onClick={() => window.myAPI.openExternal('https://esbuild.github.io')}
          >
            <img src={esbuildLogo} className="logo" alt="esbuild logo" />
          </div>
          <div
            className="external"
            aria-label="esbuild-link"
            onClick={() => window.myAPI.openExternal('https://nextjs.org/learn')}
          >
            <img src={nextLogo} className="logo" alt="next logo" />
          </div>
        </div>
        <h1>Electron + esbuild</h1>
        <div className="card">
          <p>
            Edit <code>src/web/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the esbuild and React logos to learn more</p>
      </div>
    </>
  );
}
