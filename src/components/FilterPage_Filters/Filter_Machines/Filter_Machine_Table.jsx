import ORDER_DETAILS from "../../../data/MOCK_DATA_latest";
import caret from '../../../assets/caret-up.svg';
import machine_placeholder from '../../../assets/machine_placeholder.svg';
import useFilterContext from "../../../hooks/useFilterContext";

function Filter_Machine_Table() {
    const { toggleMachines, selectAllMachines, machines } = useFilterContext();

    const handleMachineFilter = (e) => {
        toggleMachines(parseInt(e.target.value));
    }
    const handleSelectAll = () => {
        if (machines.length == ORDER_DETAILS.length) {
            selectAllMachines([]);
        } else {
            selectAllMachines(ORDER_DETAILS.map(machine => machine.machine_name));
        }
    }
    return (
        <>
            <div className="grid grid-cols-2 gap-10 justify-between my-8 px-3">
                <div className='flex gap-10  items-center'>
                    <input type="checkbox" className="text-[#377DFF] " onChange={handleSelectAll} id={"Aahaar Stall" + 10} name={"Aahaar Stall" + 10} value={10} />
                    <div className="flex flex-row gap-2">
                        <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] w-min inline-block">Machines</span>
                        <span className="text text-sm font-medium text-[#377DFF] self-start">
                            <img src={caret} alt="" />
                            <img src={caret} alt="" className='rotate-180' />
                        </span>
                    </div>
                </div>
                <div className='flex gap-2  items-center '>
                    <span className="text text-xs font-bold text-[#377DFF] uppercase leading-[1.3rem] w-min inline-block">Address</span>
                    <span className="text text-sm font-medium text-[#377DFF] self-start">
                        <img src={caret} alt="" />
                        <img src={caret} alt="" className='rotate-180' />
                    </span>
                </div>
            </div >



            <div>
                {
                    ORDER_DETAILS.map(data => (
                        <div className="grid grid-cols-2 gap-10 my-8 px-3" key={data.customer_contact}>
                            <div className="flex flex-row gap-10 ">
                                <input
                                    type="checkbox"
                                    onChange={handleMachineFilter}
                                    id={"Aahaar Stall " + data.machine_name}
                                    name={"Aahaar Stall " + data.machine_name}
                                    data-id={machines?.includes(data.machine_name)}
                                    checked={machines?.includes(data.machine_name) ? 'checked' : ''}
                                    value={data.machine_name}
                                />
                                <label htmlFor={"Aahaar Stall " + data.machine_name} className="flex flex-row items-center gap-3">
                                    <img src={machine_placeholder} alt="" />
                                    <div>
                                        <span className="text-[#333333] text-sm font-normal">
                                            {"Aahaar Stall " + data.machine_name}
                                        </span>
                                        <span className="text-[#B0A6A6] text-sm font-normal">
                                            {" (M1" + data.machine_name + ")"}
                                        </span>

                                    </div>
                                </label>
                            </div>
                            <div className="address text-[#333333] text-sm font-normal">{"Aahaar Stall " + data.machine_name + " ,Pragati Maidan, New Delhi"}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Filter_Machine_Table