import { addChallenge, updateChallenge } from "../api-scripts/API";
import Months from "../api-scripts/Months";

export default ({ onSuccess, onCancel, challengeData }) => {

    async function getFormData(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        const challenge = {
            id: challengeData.id,
            month: data.month,
            description: data.description,
        }

        console.log(challenge);

        if (challenge.id === "") {
            await addChallenge(challenge);
        }
        else {
            await updateChallenge(challenge);
        }
        form.reset();

        onSuccess();

    }




    const addChallengeForm = () => {
        return (
            <form
                onSubmit={getFormData}
                className="container-sm"
            >
                <div className="mb-4">
                    <label
                        htmlFor="month"
                        className="form-label"
                    >
                        Month
                    </label>

                    <select
                        name="month"
                        className="form-control"
                        defaultValue={challengeData.month}
                        
                        id="month"
                        required
                    >
                        <option value="" disabled>-Select Month-</option>

                        {
                            Months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))
                        }
                    </select>

                    {/* <input
                        className="form-control"
                        type="text"
                        name="month"
                        id="month"
                        defaultValue={challengeData.month}
                        required
                    /> */}
                </div>

                <div className="mb-4">


                    <label
                        htmlFor="description"
                        className="form-label"
                    >
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        defaultValue={challengeData.description}
                        rows={3}
                        style={{ resize: 'none' }}
                        required
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary">
                        {challengeData.id === "" ?
                            "Add" : "Edit"
                        }
                    </button>
                </div>
            </form>
        )

    }



    return (

        <div
            className="modal fade show d-flex justify-content-center align-items-center flex-grow-0"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(5px)",
                width: "100vw",
                height: "100vh",
                zIndex: 1050,
                overflowY: "auto",
            }}
        >
            <div className="card container-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3 className="fw-bold">
                        {challengeData.id === "" ?
                            "Add Challenge" : "Edit Challenge"
                        }
                    </h3>
                    <div>
                        <button className="btn btn-close" onClick={onCancel}></button>
                    </div>
                </div>
                <div className="card-body">
                    {addChallengeForm()}
                </div>
            </div>
        </div>




    )
}
