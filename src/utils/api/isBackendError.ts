/** @format */

interface BackendError {
  message: string;
  errors: Array<{
    field?: string;
    message: string;
  }>;
}

export const isBackendError = (error: unknown): error is BackendError => {
  return typeof error === "object" && error !== null && "errors" in error;
};
