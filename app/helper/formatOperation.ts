
function formatOperation(operation: string): string {
    return operation.replace(/x/g, '*');
}

export default formatOperation;