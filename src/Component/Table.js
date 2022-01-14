import React from 'react'

function Table() {
    return (
        <div class="container p-5 " >
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover fw-normal">
                    <thead><tr>
                        <th colspan="2 ">
                            <center><strong className='display-6'>DO's and DON'Ts</strong></center>
                        </th></tr>
                    </thead>
                    <tbody><tr><td>✔️ <strong>Do</strong>
                    </td><td>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub ✋ 🧼 🚰</td></tr><tr><td>✔️ <strong>Do</strong>
                    </td><td>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze 🤧 👃 💪</td></tr><tr><td>✔️ <strong>Do</strong></td>
                            <td>Avoid close contact (1 meter or 3 feet) with people who are unwell 🙏 😷 🚶&zwj;</td></tr><tr><td>✔️ <strong>Do</strong></td><td>Stay home and self-isolate from others in the household if you feel unwell 🏠 👨 💉</td></tr><tr><td>❌ <strong>Don't</strong></td><td>Touch your eyes, nose, or mouth if your hands are not clean 👃 👁️ 🤭</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

