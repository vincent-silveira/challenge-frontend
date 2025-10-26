import { deleteChallenge } from "../api-scripts/API";

export default function ({ challenges, onDelete, onEdit }) {

    async function handleDelete(id) {
        await deleteChallenge(id);
        // console.log("Deleted id : " + id);
        onDelete();
    }

    // Edit Button
    const editButton = (id) => {
        return (
            <button
                className="btn btn-outline-primary btn-sm flex-shrink-0"
                onClick={() => onEdit(id)}
            >
                Edit
            </button>
        )
    }

    // Delete Button
    const deleteButton = (id) => {
        return (
            <button
                className="btn btn-outline-danger btn-sm flex-shrink-0"
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        )
    }

    return (
        <><div className="list-group px-3 py-3">
            {
                
                challenges.map((challenge) =>
                        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                        key={challenge.id}>
                            
                            {/* Challenge Info */}
                            <div className="mr-3">
                                <h3 className="mb-1">{challenge.month}</h3>
                                <p className="mb-1">{challenge.description}</p>
                            </div>
                            
                            {/* Buttons */}
                            <div className="d-flex gap-2 ms-2">
                                {editButton(challenge.id)}
                                {deleteButton(challenge.id)}
                            </div>
                        </div>
                )
            }
            </div>
        </>
    );
}