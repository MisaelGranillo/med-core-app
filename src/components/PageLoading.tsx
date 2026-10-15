/* Esqueleto mientras llega el contenido completo (tema o quiz). Mantiene la
 * forma de la página para que no salte al cargar. */
export function PageLoading() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6" aria-busy="true" aria-label="Cargando">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <div className="card p-8 flex flex-col gap-4">
          <span className="h-4 w-40 rounded-full bg-zinc-100" />
          <span className="h-10 w-3/4 rounded-xl bg-zinc-100" />
          <span className="h-4 w-full max-w-md rounded-full bg-zinc-100" />
          <span className="h-11 w-36 rounded-2xl bg-zinc-100 mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card p-6"><span className="block h-14 w-16 rounded-xl bg-zinc-100" /></div>
          <div className="card p-6"><span className="block h-14 w-16 rounded-xl bg-zinc-100" /></div>
        </div>
      </div>
      <div className="card h-20 mt-6" />
      <div className="card h-20 mt-4" />
    </div>
  )
}
