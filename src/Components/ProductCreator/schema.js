import { z } from 'zod';

export const schema = z.object({
    code: z.string().min(8, "Code must be at least 8 characters long"),
    name: z.string().min(8, "Name must be at least 8 characters long"),
    cuttingDiameter: z.string()
        .min(1, "Required")
        .refine(value => !isNaN(parseFloat(value)) && parseFloat(value) >= 1, "Must be equal or more than 1"),
    connectionDiameter: z.string()
        .min(1, "Required")
        .refine(value => (Number.isInteger(parseFloat(value))) && (parseFloat(value) >= 3), "Must be integer equal or more than 3"),
    cuttingLength: z.string()
        .min(1, "Required")
        .refine(value => (Number.isInteger(parseFloat(value)) && parseFloat(value) >= 6), "Must be a valid integer more than 6"),
    totalLength: z.string()
        .min(1, "Required")
        .refine(value => (Number.isInteger(parseFloat(value)) && parseFloat(value) >= 50), "Must be a valid integer more than 50"),
    flutes: z.string()
        .min(1, "Required")
        .refine(value => (Number.isInteger(parseFloat(value)) && (parseFloat(value) >= 1 && parseFloat(value) <= 12)), "Must be a valid integer more than 1 less than 13"),
    chamfer: z.string()
        .min(1, "Required")
        .refine(value => !isNaN(parseFloat(value)) && parseFloat(value) >= 0.05, "Must be equal or more than 0,05")
});