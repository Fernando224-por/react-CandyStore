import { toast } from "sonner";

export function successAction () {
    toast.success('Great!', {
        description: 'Your Product are registed!, check your Dasboard',
        style: { background: 'green', color: 'white' },
        position: 'bottom-left'
    })
}

export function badAction () {
    toast.error('Oh no!', {
        description: 'Something goes wrong',
        style: { background: 'red', color: 'white' },
        position: 'bottom-left'
    })
}