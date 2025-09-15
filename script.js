/**
 * BLUESTOCK Document Verification System
 * JavaScript functionality for document verification with QR code scanning flow
 * Based on BLUESTOCK HR portal design and functionality
 */

// Document database (in a real application, this would be fetched from a server)
const documentDatabase = {
    'BFT11383': {
        id: 'BFT11383',
        internName: 'Prashant Singh',
        company: 'Bluestock Fintech',
        role: 'SDE Intern(remote)',
        issueDate: '2025-07-30',
        duration: '1 Jun 2025 - 30 Jul 2025',
        status: 'verified',
        remark: 'ok'
    },
    // Kaushal's verification codes
    'BFT11384': {
        id: 'BFT11384',
        internName: 'Kaushal',
        company: 'Bluestock Fintech',
        role: 'Software Development Engineer',
        issueDate: '2024-01-15',
        duration: '1 Jan 2024 - 15 Jan 2024',
        status: 'verified',
        remark: 'verified'
    },
    'BFT11385': {
        id: 'BFT11385',
        internName: 'Kaushal',
        company: 'Bluestock Fintech',
        role: 'Software Development Engineer',
        issueDate: '2024-01-15',
        duration: '1 Jan 2024 - 15 Jan 2024',
        status: 'verified',
        remark: 'verified'
    },
    'BFT11386': {
        id: 'BFT11386',
        internName: 'Kaushal',
        company: 'Bluestock Fintech',
        role: 'Software Development Engineer',
        issueDate: '2024-01-15',
        duration: '1 Jan 2024 - 15 Jan 2024',
        status: 'verified',
        remark: 'verified'
    },
    'BFT11387': {
        id: 'BFT11387',
        internName: 'John Doe',
        company: 'Bluestock Fintech',
        role: 'Data Analyst Intern',
        issueDate: '2024-01-20',
        duration: '1 Jan 2024 - 20 Jan 2024',
        status: 'verified',
        remark: 'verified'
    }
};

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('BLUESTOCK Document Verification System initialized');
    
    // Add enter key support for document ID input
    const documentIdInput = document.getElementById('documentId');
    if (documentIdInput) {
        documentIdInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verifyDocument();
            }
        });
    }
    
    // Check for document ID in URL parameters (for QR code scanning)
    checkUrlParameters();
    
    // Close modal when clicking outside
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

/**
 * Verify document based on entered ID
 */
function verifyDocument() {
    const documentId = document.getElementById('documentId').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const verifyBtn = document.getElementById('verifyBtn');
    
    // Clear previous error messages
    hideError();
    
    // Validate input
    if (!documentId) {
        showError('Please enter a document ID');
        return;
    }
    
    // Show loading state
    showLoading(verifyBtn);
    
    // Simulate API call delay
    setTimeout(() => {
        const document = documentDatabase[documentId];
        
        if (document) {
            showVerificationModal(document);
            hideError();
        } else {
            showError('Document not found. Please check the document ID and try again.');
        }
        
        hideLoading(verifyBtn);
    }, 1000);
}

/**
 * Show verification success modal with document details
 * @param {Object} docData - Document data object
 */
function showVerificationModal(docData) {
    console.log('Showing verification modal for document:', docData);
    
    // Update modal content
    document.getElementById('modalInternName').textContent = docData.internName;
    document.getElementById('modalIssueDate').textContent = docData.issueDate;
    document.getElementById('modalRole').textContent = docData.role;
    document.getElementById('modalDuration').textContent = docData.duration;
    document.getElementById('modalRemark').textContent = docData.remark;
    
    // Show modal
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add animation class
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
        }
    }
}


/**
 * Close verification modal
 */
function closeModal() {
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

/**
 * Generate QR code URL for document sharing
 * @param {string} documentId - Document ID to generate QR for
 */
function generateQRCode(documentId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?doc=${documentId}`;
    console.log('QR Code URL for document', documentId, ':', shareUrl);
    return shareUrl;
}

/**
 * Check for document ID in URL parameters (for QR code scanning)
 */
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('doc');
    
    if (docId) {
        document.getElementById('documentId').value = docId;
        verifyDocument();
    }
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    if (errorMessage && errorText) {
        errorText.textContent = message;
        errorMessage.style.display = 'flex';
        errorMessage.scrollIntoView({ behavior: 'smooth' });
    }
    
    console.error('Error:', message);
}

/**
 * Hide error message
 */
function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

/**
 * Show loading state on button
 * @param {HTMLElement} button - Button element to show loading on
 */
function showLoading(button) {
    if (button) {
        button.disabled = true;
        button.innerHTML = '<div class="loading"></div> Verifying...';
    }
}

/**
 * Hide loading state on button
 * @param {HTMLElement} button - Button element to hide loading on
 */
function hideLoading(button) {
    if (button) {
        button.disabled = false;
        button.innerHTML = 'Verify Now';
    }
}

/**
 * Show temporary message to user
 * @param {string} message - Message to display
 */
function showTemporaryMessage(message) {
    // Create temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        font-weight: 500;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    messageDiv.textContent = message;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }
    }, 3000);
}

/**
 * Format date for display
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Utility function to validate document ID format
 * @param {string} docId - Document ID to validate
 * @returns {boolean} True if valid format
 */
function isValidDocumentId(docId) {
    // BLUESTOCK document IDs typically start with BFT followed by numbers
    const pattern = /^BFT\d{5}$/;
    return pattern.test(docId);
}

/**
 * Add document to database (for demo purposes)
 * @param {Object} document - Document object to add
 */
function addDocument(document) {
    if (document && document.id) {
        documentDatabase[document.id] = document;
        console.log('Document added to database:', document.id);
    }
}

/**
 * Generate QR code for document sharing
 * @param {string} documentId - Document ID to generate QR for
 */
function generateQRCode(documentId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?doc=${documentId}`;
    
    // This function can be used if you want to display QR codes
    // For now, the QR code scanning is handled by URL parameters
    console.log('QR Code URL:', shareUrl);
    return shareUrl;
}

/**
 * Simulate document verification API call
 * @param {string} documentId - Document ID to verify
 * @returns {Promise<Object>} Promise that resolves with document data
 */
async function verifyDocumentAPI(documentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const document = documentDatabase[documentId];
            if (document) {
                resolve(document);
            } else {
                reject(new Error('Document not found'));
            }
        }, 1000);
    });
}

// Export functions for testing (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        verifyDocument,
        showVerificationModal,
        generateQRCode,
        formatDate,
        isValidDocumentId,
        addDocument,
        verifyDocumentAPI
    };
}