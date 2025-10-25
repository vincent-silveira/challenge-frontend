import { useState, useEffect } from "react";
import { fetchAllChallenge, fetchChallenge } from "../api-scripts/API";
import ChallengeList from "../components/ChallengeList";
import Form from "../components/Form";

export default  () => {

    const [challenges, setChallenges] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ id: "", month: "", description: "" });

    const fetchData = async () => {
        const data = await fetchAllChallenge();
        setChallenges(data);
    };


    const handleEdit = async (challenge_id) => {
        const challenge = await fetchChallenge(challenge_id);
        setFormData({
            id: challenge_id,
            month: challenge.month,
            description: challenge.description,
        });
        setShowForm(true);
    };

    useEffect(() => {
        fetchData();
    }, []);



    // Add challenge button
    const addChallengeButton = () => {
        return (
            <div>
                <button
                    className="btn btn-primary flex-shrink-0"
                    onClick={() => setShowForm(true)}
                >
                    Add Challenge
                </button>
            </div>
        );
    }

    // Display form
    const displayChallengeForm = () => {
        return (
            <Form
                onSuccess={
                    () => {
                        fetchData();
                        setShowForm(false);
                        setFormData({ id: "", month: "", description: "" });
                    }
                }
                onCancel={
                    () => {
                        setShowForm(false);
                        setFormData({ id: "", month: "", description: "" })
                    }
                }
                challengeData={formData}
                // resetFormData={setFormData}
            />
        );
    }

    return (
        <>
            {/* Main Header */}
            <h1 className="text-center my-5 fw-bold">
                Challenge App
            </h1>


            <div className="card  mb-5">

                {/* Nav-Bar */}
                <div className="card-header d-flex justify-content-between align-items-center px-4 py-3">
                    <h2 className="fw-bold">Challenges</h2>
                    {addChallengeButton()}
                </div>


                {/* Challenge List */}
                <ChallengeList
                    challenges={challenges}
                    onDelete={fetchData}
                    onEdit={handleEdit}
                />
            </div>


            {/* Form */}
            {showForm ? displayChallengeForm() : null}
        </>
    )
}