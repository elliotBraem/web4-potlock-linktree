import axios from 'axios';
import Cookies from 'js-cookie';

interface Args {
  [key: string]: any;
}

interface CallOptions {
  gas?: string;
  deposit?: string;
  callbackUrl?: string;
}

export function isSignedIn() {
  console.log('isSignedIn', Cookies.get('web4_account_id'));
  return !!Cookies.get('web4_account_id');
}

export function getAccountId() {
  console.log('getAccountId', Cookies.get('web4_account_id'));
  return Cookies.get('web4_account_id');
}

export function login() {
  window.location.href = "/web4/login";
};

export function logout() {
  window.location.href = "/web4/logout";
};

export async function view(contractId: string,
  methodName: string, args?: Args) {
  try {
    const res = await axios.get(`/web4/contract/${contractId}/${methodName}`, {
      params: {
        'request.json': JSON.stringify(args)
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error in view method:", error);
    throw error;
  }
}

export async function call<T = any>(contractId: string,
  methodName: string, args: Args, options: CallOptions = {}): Promise<T> {
  try {
    const payload = {
      ...args,
      web4_gas: options.gas,
      web4_deposit: options.deposit,
      web4_callback_url: options.callbackUrl,
    };

    const res = await axios.post<T>(`/web4/contract/${contractId}/${methodName}`, payload);
    return res.data;
  } catch (error) {
    console.error("Error in call method:", error);
    throw error;
  }
}
