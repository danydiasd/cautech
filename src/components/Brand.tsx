export function Brand({light=false}:{light?:boolean}){return <span className={`brand ${light?'brand--light':''}`}><span className="cau-logo" role="img" aria-label="CAU TECH"><img src="/assets/cau-tech.svg" alt=""/></span></span>}
export function DaseBrand(){return <div className="dase-crop" role="img" aria-label="DASE Imóveis"><img src="/assets/dase-board.svg" alt=""/></div>}
