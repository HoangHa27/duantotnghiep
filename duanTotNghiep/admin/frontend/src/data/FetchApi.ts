const fetchUrl = `${window.location.hostname}:5000`


export const bodyGet: any = () => {
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
  }
}
export const bodyPost: any = (body: any) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(body),
  }
}

export const bodyPut: any = (body: any) => {
  return {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(body),
  }
}

export const bodyDelete: any = () => {
  return {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
  }
}

// get


// post
const login = `http://${fetchUrl}/api/auth/login`
const forgetpass = `http://${fetchUrl}/api/auth/login`

// put

// delete


export const newFetchData = {
  login,
  forgetpass
}
