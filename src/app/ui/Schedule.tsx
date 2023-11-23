
export default function Schedule() {
    return (
        <section className="schedule flex justify-around items-center h-36 p-4 mt-6 text-black">
            <span className="text-2xl font-medium p-2">
                Horario
            </span>
            <div className="flex flex-col gap-2 font-semibold p-2">
                <span>
                    Lunes a Sábado <br />
                    9:00am - 7:00pm
                </span>
                <span>
                    Domingo <br />
                    10:00am - 6:00pm
                </span>
            </div>
        </section>
    )
}