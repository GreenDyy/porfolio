import React, { useState, useEffect } from 'react'
import './FormTemplate.scss'

// Form configuration với nested groups (cấp 2, cấp 3...)
const formConfig = {
  "partnerId": "universalPartner",
  "formName": "UniversalRegistration",
  "fields": [
    {
      "name": "username",
      "label": "Tên Đăng Nhập",
      "type": "text",
      "rules": ["required", "minLength:3"],
      "order": 1,
      "placeholder": "Nhập tên đăng nhập của bạn",
      "meta": {
        "icon": "user"
      }
    },
    {
      "name": "email",
      "label": "Địa chỉ Email",
      "type": "text",
      "subtype": "email",
      "rules": ["required", "email"],
      "order": 2,
      "meta": {
        "icon": "email"
      }
    },
    {
      "name": "password",
      "label": "Mật Khẩu",
      "type": "text",
      "subtype": "password",
      "rules": ["required", "minLength:6"],
      "order": 3,
      "meta": {
        "icon": "lock"
      }
    },
    {
      "name": "confirmPassword",
      "label": "Xác Nhận Mật Khẩu",
      "type": "text",
      "subtype": "password",
      "rules": ["required", {"matchField": "password", "message": "Mật khẩu không khớp!"}],
      "order": 4,
      "meta": {
        "icon": "lock"
      }
    },
    {
      "name": "personalInfo",
      "label": "Thông tin cá nhân",
      "type": "group",
      "order": 5,
      "children": [
        {
          "name": "address",
          "label": "Địa chỉ",
          "type": "group", // Cấp 2
          "order": 1,
          "children": [
            {
              "name": "current",
              "label": "Địa chỉ hiện tại",
              "type": "group", // Cấp 3
              "order": 1,
              "children": [
                {
                  "name": "street",
                  "label": "Số nhà, Tên đường",
                  "type": "text",
                  "rules": ["required"],
                  "order": 1
                },
                {
                  "name": "ward",
                  "label": "Phường/Xã",
                  "type": "text",
                  "rules": ["required"],
                  "order": 2
                },
                {
                  "name": "district",
                  "label": "Quận/Huyện",
                  "type": "select",
                  "options": [
                    {"label": "Quận 1", "value": "q1"},
                    {"label": "Quận 2", "value": "q2"},
                    {"label": "Quận 3", "value": "q3"}
                  ],
                  "rules": ["required"],
                  "order": 3
                },
                {
                  "name": "city",
                  "label": "Thành phố",
                  "type": "select",
                  "options": [
                    {"label": "Hồ Chí Minh", "value": "hcm"},
                    {"label": "Hà Nội", "value": "hn"}
                  ],
                  "rules": ["required"],
                  "order": 4
                }
              ]
            },
            {
              "name": "permanent",
              "label": "Địa chỉ thường trú",
              "type": "group", // Cấp 3
              "order": 2,
              "children": [
                {
                  "name": "sameAsCurrent",
                  "label": "Giống địa chỉ hiện tại",
                  "type": "checkbox",
                  "order": 1
                },
                {
                  "name": "street",
                  "label": "Số nhà, Tên đường",
                  "type": "text",
                  "order": 2,
                  "dependsOn": {
                    "field": "personalInfo.address.permanent.sameAsCurrent",
                    "value": false
                  }
                },
                {
                  "name": "city",
                  "label": "Thành phố",
                  "type": "select",
                  "options": [
                    {"label": "Hồ Chí Minh", "value": "hcm"},
                    {"label": "Hà Nội", "value": "hn"}
                  ],
                  "order": 3,
                  "dependsOn": {
                    "field": "personalInfo.address.permanent.sameAsCurrent",
                    "value": false
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "contact",
          "label": "Thông tin liên hệ",
          "type": "group", // Cấp 2
          "order": 2,
          "children": [
            {
              "name": "phone",
              "label": "Số điện thoại",
              "type": "text",
              "subtype": "tel",
              "rules": ["required"],
              "order": 1
            },
            {
              "name": "emergency",
              "label": "Liên hệ khẩn cấp",
              "type": "group", // Cấp 3
              "order": 2,
              "children": [
                {
                  "name": "name",
                  "label": "Họ tên người liên hệ",
                  "type": "text",
                  "rules": ["required"],
                  "order": 1
                },
                {
                  "name": "relationship",
                  "label": "Mối quan hệ",
                  "type": "select",
                  "options": [
                    {"label": "Cha/Mẹ", "value": "parent"},
                    {"label": "Anh/Chị/Em", "value": "sibling"},
                    {"label": "Vợ/Chồng", "value": "spouse"},
                    {"label": "Bạn bè", "value": "friend"}
                  ],
                  "rules": ["required"],
                  "order": 2
                },
                {
                  "name": "phone",
                  "label": "Số điện thoại",
                  "type": "text",
                  "subtype": "tel",
                  "rules": ["required"],
                  "order": 3
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "gender",
      "label": "Giới tính",
      "type": "radio",
      "options": [
        {"label": "Nam", "value": "male"},
        {"label": "Nữ", "value": "female"},
        {"label": "Khác", "value": "other"}
      ],
      "rules": ["required"],
      "order": 6
    },
    {
      "name": "dob",
      "label": "Ngày sinh",
      "type": "date",
      "rules": ["required"],
      "order": 7
    },
    {
      "name": "notes",
      "label": "Ghi chú",
      "type": "textarea",
      "order": 8,
      "hidden": false
    }
  ]
}

// Validation functions
const validateField = (value, rules, allValues = {}) => {
  const errors = []
  
  for (const rule of rules) {
    if (typeof rule === 'string') {
      if (rule === 'required' && (!value || value.toString().trim() === '')) {
        errors.push('Trường này là bắt buộc')
      } else if (rule.startsWith('minLength:')) {
        const minLength = parseInt(rule.split(':')[1])
        if (value && value.length < minLength) {
          errors.push(`Tối thiểu ${minLength} ký tự`)
        }
      } else if (rule === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (value && !emailRegex.test(value)) {
          errors.push('Email không hợp lệ')
        }
      }
    } else if (typeof rule === 'object' && rule.matchField) {
      if (value !== allValues[rule.matchField]) {
        errors.push(rule.message || 'Giá trị không khớp')
      }
    }
  }
  
  return errors
}

// Icon component
const Icon = ({ name }) => {
  const icons = {
    user: '👤',
    email: '📧',
    lock: '🔒',
    home: '🏠',
    calendar: '📅',
    note: '📝'
  }
  
  return <span className="field-icon">{icons[name] || '📝'}</span>
}

function TestFormTemplate() {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  
  // Sort fields by order
  const sortedFields = [...formConfig.fields].sort((a, b) => a.order - b.order)
  
  // Helper function to get nested value
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj)
  }
  
  // Helper function to set nested value
  const setNestedValue = (obj, path, value) => {
    const keys = path.split('.')
    const lastKey = keys.pop()
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {}
      return current[key]
    }, obj)
    target[lastKey] = value
  }
  
  const handleInputChange = (fieldPath, value) => {
    setFormData(prev => {
      const newData = { ...prev }
      setNestedValue(newData, fieldPath, value)
      return newData
    })
    
    // Clear errors when user starts typing
    if (errors[fieldPath]) {
      setErrors(prev => ({
        ...prev,
        [fieldPath]: []
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    const validateFieldRecursive = (field, parentPath = '') => {
      const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name
      const value = getNestedValue(formData, fieldPath)
      
      // Skip validation if field is conditionally hidden
      if (!shouldShowField(field, parentPath)) {
        return
      }
      
      if (field.rules) {
        const fieldErrors = validateField(value, field.rules, formData)
        if (fieldErrors.length > 0) {
          newErrors[fieldPath] = fieldErrors
        }
      }
      
      if (field.children) {
        field.children.forEach(child => validateFieldRecursive(child, fieldPath))
      }
    }
    
    sortedFields.forEach(field => validateFieldRecursive(field))
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  // Helper function to check if field should be shown based on dependencies
  const shouldShowField = (field, parentPath = '') => {
    if (!field.dependsOn) return true
    
    const dependencyPath = field.dependsOn.field
    const dependencyValue = getNestedValue(formData, dependencyPath)
    
    if (field.dependsOn.value === false) {
      return !dependencyValue
    }
    
    return dependencyValue === field.dependsOn.value
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form data:', formData)
      alert('Form submitted successfully!')
    } else {
      console.log('Form has errors:', errors)
    }
  }
  
  const renderField = (field, parentPath = '', level = 0) => {
    const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name
    const value = getNestedValue(formData, fieldPath) || ''
    const fieldErrors = errors[fieldPath] || []
    
    if (field.hidden || !shouldShowField(field, parentPath)) return null
    
    const commonProps = {
      id: fieldPath,
      name: fieldPath,
      value: value,
      onChange: (e) => handleInputChange(fieldPath, e.target.value),
      className: `form-input ${fieldErrors.length > 0 ? 'error' : ''}`
    }
    
    switch (field.type) {
      case 'text':
        return (
          <div key={fieldPath} className="form-group">
            <label htmlFor={fieldPath} className="form-label">
              {field.meta?.icon && <Icon name={field.meta.icon} />}
              {field.label}
            </label>
            <input
              {...commonProps}
              type={field.subtype === 'password' ? 'password' : 
                    field.subtype === 'email' ? 'email' : 
                    field.subtype === 'tel' ? 'tel' : 'text'}
              placeholder={field.placeholder}
            />
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'select':
        return (
          <div key={fieldPath} className="form-group">
            <label htmlFor={fieldPath} className="form-label">
              {field.meta?.icon && <Icon name={field.meta.icon} />}
              {field.label}
            </label>
            <select {...commonProps}>
              <option value="">Chọn {field.label.toLowerCase()}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'radio':
        return (
          <div key={fieldPath} className="form-group">
            <label className="form-label">
              {field.meta?.icon && <Icon name={field.meta.icon} />}
              {field.label}
            </label>
            <div className="radio-group">
              {field.options?.map(option => (
                <label key={option.value} className="radio-label">
                  <input
                    type="radio"
                    name={fieldPath}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => handleInputChange(fieldPath, e.target.value)}
                    className="radio-input"
                  />
                  <span className="radio-text">{option.label}</span>
                </label>
              ))}
            </div>
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'checkbox':
        return (
          <div key={fieldPath} className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name={fieldPath}
                checked={Boolean(value)}
                onChange={(e) => handleInputChange(fieldPath, e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                {field.meta?.icon && <Icon name={field.meta.icon} />}
                {field.label}
              </span>
            </label>
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'date':
        return (
          <div key={fieldPath} className="form-group">
            <label htmlFor={fieldPath} className="form-label">
              {field.meta?.icon && <Icon name={field.meta.icon} />}
              {field.label}
            </label>
            <input
              {...commonProps}
              type="date"
            />
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'textarea':
        return (
          <div key={fieldPath} className="form-group">
            <label htmlFor={fieldPath} className="form-label">
              {field.meta?.icon && <Icon name={field.meta.icon} />}
              {field.label}
            </label>
            <textarea
              {...commonProps}
              rows="4"
              placeholder={field.placeholder}
            />
            {fieldErrors.map((error, index) => (
              <span key={index} className="error-message">{error}</span>
            ))}
          </div>
        )
      
      case 'group':
        const sortedChildren = [...(field.children || [])].sort((a, b) => a.order - b.order)
        return (
          <div key={fieldPath} className={`form-group group level-${level}`}>
            <fieldset className="form-fieldset">
              <legend className="form-legend">{field.label}</legend>
              <div className="group-fields">
                {sortedChildren.map(childField => renderField(childField, fieldPath, level + 1))}
              </div>
            </fieldset>
          </div>
        )
      
      default:
        return null
    }
  }
  
  return (
    <div className="form-template-container">
      <div className="form-header">
        <h2>Form Động - {formConfig.formName}</h2>
        <p>Partner ID: {formConfig.partnerId}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="dynamic-form">
        {sortedFields.map(field => renderField(field, '', 0))}
        
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Đăng Ký
          </button>
          <button type="button" onClick={() => setFormData({})} className="reset-button">
            Reset
          </button>
        </div>
      </form>
      
      {/* Debug info */}
      <div className="debug-info">
        <h3>Form Data (Debug):</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        {Object.keys(errors).length > 0 && (
          <>
            <h3>Errors:</h3>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </>
        )}
      </div>
    </div>
  )
}

export default TestFormTemplate