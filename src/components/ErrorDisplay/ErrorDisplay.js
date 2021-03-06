import './style.css';

function ErrorDisplay({ formErrors }) {

    return (
        <div className="row">
            <div className="col col-12">
                <ul className="list-group mb-2">
                    {
                        formErrors.map(formError => {
                            return <li className="list-group-item py-0 px-1 mt-1 rounded text-danger" key={formError}>{formError}</li>
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default ErrorDisplay;