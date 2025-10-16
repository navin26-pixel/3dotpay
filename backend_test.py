#!/usr/bin/env python3
"""
Backend API Test Suite for 3dotpay
Tests all backend endpoints to ensure proper functionality
"""

import requests
import json
import sys
from typing import Dict, Any

# Get backend URL from frontend .env
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class BackendTester:
    def __init__(self):
        self.backend_url = get_backend_url()
        if not self.backend_url:
            raise Exception("Could not get backend URL from frontend/.env")
        
        self.api_url = f"{self.backend_url}/api"
        self.results = []
        
    def log_result(self, test_name: str, success: bool, message: str, details: Dict[Any, Any] = None):
        """Log test result"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "details": details or {}
        }
        self.results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details and not success:
            print(f"   Details: {details}")
    
    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "3dotpay API is running":
                    self.log_result("Root Endpoint", True, "Root endpoint working correctly")
                else:
                    self.log_result("Root Endpoint", False, f"Unexpected message: {data.get('message')}", {"response": data})
            else:
                self.log_result("Root Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Root Endpoint", False, f"Request failed: {str(e)}")
    
    def test_benefits_endpoint(self):
        """Test GET /api/benefits - Should return 4 benefits"""
        try:
            response = requests.get(f"{self.api_url}/benefits", timeout=10)
            
            if response.status_code == 200:
                benefits = response.json()
                
                # Check if it's a list
                if not isinstance(benefits, list):
                    self.log_result("Benefits Endpoint", False, "Response is not a list", {"response": benefits})
                    return
                
                # Check count
                if len(benefits) != 4:
                    self.log_result("Benefits Endpoint", False, f"Expected 4 benefits, got {len(benefits)}", {"count": len(benefits)})
                    return
                
                # Check structure and fields
                required_fields = ["title", "description", "image", "color", "order", "active"]
                all_active = True
                properly_sorted = True
                
                for i, benefit in enumerate(benefits):
                    # Check required fields
                    for field in required_fields:
                        if field not in benefit:
                            self.log_result("Benefits Endpoint", False, f"Missing field '{field}' in benefit {i}", {"benefit": benefit})
                            return
                    
                    # Check if active
                    if not benefit.get("active"):
                        all_active = False
                    
                    # Check sorting (order should be ascending)
                    if i > 0 and benefit.get("order", 0) < benefits[i-1].get("order", 0):
                        properly_sorted = False
                
                if not all_active:
                    self.log_result("Benefits Endpoint", False, "Not all benefits are active=true")
                elif not properly_sorted:
                    self.log_result("Benefits Endpoint", False, "Benefits not sorted by order")
                else:
                    self.log_result("Benefits Endpoint", True, f"All 4 benefits returned correctly, all active, properly sorted")
            else:
                self.log_result("Benefits Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Benefits Endpoint", False, f"Request failed: {str(e)}")
    
    def test_features_endpoint(self):
        """Test GET /api/features - Should return 6 features"""
        try:
            response = requests.get(f"{self.api_url}/features", timeout=10)
            
            if response.status_code == 200:
                features = response.json()
                
                # Check if it's a list
                if not isinstance(features, list):
                    self.log_result("Features Endpoint", False, "Response is not a list", {"response": features})
                    return
                
                # Check count
                if len(features) != 6:
                    self.log_result("Features Endpoint", False, f"Expected 6 features, got {len(features)}", {"count": len(features)})
                    return
                
                # Check structure and fields
                required_fields = ["icon", "title", "description", "order", "active"]
                all_active = True
                properly_sorted = True
                
                for i, feature in enumerate(features):
                    # Check required fields
                    for field in required_fields:
                        if field not in feature:
                            self.log_result("Features Endpoint", False, f"Missing field '{field}' in feature {i}", {"feature": feature})
                            return
                    
                    # Check if active
                    if not feature.get("active"):
                        all_active = False
                    
                    # Check sorting (order should be ascending)
                    if i > 0 and feature.get("order", 0) < features[i-1].get("order", 0):
                        properly_sorted = False
                
                if not all_active:
                    self.log_result("Features Endpoint", False, "Not all features are active=true")
                elif not properly_sorted:
                    self.log_result("Features Endpoint", False, "Features not sorted by order")
                else:
                    self.log_result("Features Endpoint", True, f"All 6 features returned correctly, all active, properly sorted")
            else:
                self.log_result("Features Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Features Endpoint", False, f"Request failed: {str(e)}")
    
    def test_faqs_endpoint(self):
        """Test GET /api/faqs - Should return 6 FAQs"""
        try:
            response = requests.get(f"{self.api_url}/faqs", timeout=10)
            
            if response.status_code == 200:
                faqs = response.json()
                
                # Check if it's a list
                if not isinstance(faqs, list):
                    self.log_result("FAQs Endpoint", False, "Response is not a list", {"response": faqs})
                    return
                
                # Check count
                if len(faqs) != 6:
                    self.log_result("FAQs Endpoint", False, f"Expected 6 FAQs, got {len(faqs)}", {"count": len(faqs)})
                    return
                
                # Check structure and fields
                required_fields = ["question", "answer", "category", "order", "active"]
                all_active = True
                properly_sorted = True
                
                for i, faq in enumerate(faqs):
                    # Check required fields
                    for field in required_fields:
                        if field not in faq:
                            self.log_result("FAQs Endpoint", False, f"Missing field '{field}' in FAQ {i}", {"faq": faq})
                            return
                    
                    # Check if active
                    if not faq.get("active"):
                        all_active = False
                    
                    # Check sorting (order should be ascending)
                    if i > 0 and faq.get("order", 0) < faqs[i-1].get("order", 0):
                        properly_sorted = False
                
                if not all_active:
                    self.log_result("FAQs Endpoint", False, "Not all FAQs are active=true")
                elif not properly_sorted:
                    self.log_result("FAQs Endpoint", False, "FAQs not sorted by order")
                else:
                    self.log_result("FAQs Endpoint", True, f"All 6 FAQs returned correctly, all active, properly sorted")
            else:
                self.log_result("FAQs Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("FAQs Endpoint", False, f"Request failed: {str(e)}")
    
    def test_stats_endpoint(self):
        """Test GET /api/stats - Should return stats object"""
        try:
            response = requests.get(f"{self.api_url}/stats", timeout=10)
            
            if response.status_code == 200:
                stats = response.json()
                
                # Check if it's a dict
                if not isinstance(stats, dict):
                    self.log_result("Stats Endpoint", False, "Response is not an object", {"response": stats})
                    return
                
                # Check required fields and values
                expected_stats = {
                    "countries": 158,
                    "users": "1M+",
                    "transactionVolume": "$5B+",
                    "support": "24/7"
                }
                
                missing_fields = []
                incorrect_values = []
                
                for field, expected_value in expected_stats.items():
                    if field not in stats:
                        missing_fields.append(field)
                    elif stats[field] != expected_value:
                        incorrect_values.append(f"{field}: expected {expected_value}, got {stats[field]}")
                
                if missing_fields:
                    self.log_result("Stats Endpoint", False, f"Missing fields: {missing_fields}", {"stats": stats})
                elif incorrect_values:
                    self.log_result("Stats Endpoint", False, f"Incorrect values: {incorrect_values}", {"stats": stats})
                else:
                    self.log_result("Stats Endpoint", True, "Stats returned correctly with expected values")
            else:
                self.log_result("Stats Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Stats Endpoint", False, f"Request failed: {str(e)}")
    
    def test_cards_endpoint(self):
        """Test GET /api/cards - Should return 2 cards"""
        try:
            response = requests.get(f"{self.api_url}/cards", timeout=10)
            
            if response.status_code == 200:
                cards = response.json()
                
                # Check if it's a list
                if not isinstance(cards, list):
                    self.log_result("Cards Endpoint", False, "Response is not a list", {"response": cards})
                    return
                
                # Check count
                if len(cards) != 2:
                    self.log_result("Cards Endpoint", False, f"Expected 2 cards, got {len(cards)}", {"count": len(cards)})
                    return
                
                # Check structure and fields
                required_fields = ["name", "description", "features", "gradient", "active"]
                all_active = True
                
                for i, card in enumerate(cards):
                    # Check required fields
                    for field in required_fields:
                        if field not in card:
                            self.log_result("Cards Endpoint", False, f"Missing field '{field}' in card {i}", {"card": card})
                            return
                    
                    # Check if active
                    if not card.get("active"):
                        all_active = False
                    
                    # Check if features is an array
                    if not isinstance(card.get("features"), list):
                        self.log_result("Cards Endpoint", False, f"Features field is not an array in card {i}", {"card": card})
                        return
                
                if not all_active:
                    self.log_result("Cards Endpoint", False, "Not all cards are active=true")
                else:
                    self.log_result("Cards Endpoint", True, f"All 2 cards returned correctly, all active")
            else:
                self.log_result("Cards Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Cards Endpoint", False, f"Request failed: {str(e)}")
    
    def test_contact_endpoint(self):
        """Test POST /api/contact - Test contact form submission"""
        try:
            contact_data = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "message": "I'm interested in learning more about your crypto card services and how to get started."
            }
            
            response = requests.post(
                f"{self.api_url}/contact", 
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                contact = response.json()
                
                # Check if response is a dict
                if not isinstance(contact, dict):
                    self.log_result("Contact Endpoint", False, "Response is not an object", {"response": contact})
                    return
                
                # Check required fields
                required_fields = ["name", "email", "message", "status"]
                missing_fields = []
                
                for field in required_fields:
                    if field not in contact:
                        missing_fields.append(field)
                
                if missing_fields:
                    self.log_result("Contact Endpoint", False, f"Missing fields in response: {missing_fields}", {"contact": contact})
                    return
                
                # Check if data matches what was sent
                data_matches = (
                    contact["name"] == contact_data["name"] and
                    contact["email"] == contact_data["email"] and
                    contact["message"] == contact_data["message"]
                )
                
                # Check if status is "pending"
                status_correct = contact["status"] == "pending"
                
                if not data_matches:
                    self.log_result("Contact Endpoint", False, "Returned data doesn't match submitted data", {"sent": contact_data, "received": contact})
                elif not status_correct:
                    self.log_result("Contact Endpoint", False, f"Status should be 'pending', got '{contact['status']}'", {"contact": contact})
                else:
                    self.log_result("Contact Endpoint", True, "Contact form submission working correctly with status='pending'")
            else:
                self.log_result("Contact Endpoint", False, f"HTTP {response.status_code}", {"response": response.text})
                
        except Exception as e:
            self.log_result("Contact Endpoint", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting 3dotpay Backend API Tests")
        print(f"Backend URL: {self.backend_url}")
        print(f"API URL: {self.api_url}")
        print("=" * 60)
        
        # Run all tests
        self.test_root_endpoint()
        self.test_benefits_endpoint()
        self.test_features_endpoint()
        self.test_faqs_endpoint()
        self.test_stats_endpoint()
        self.test_cards_endpoint()
        self.test_contact_endpoint()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for r in self.results if r["success"])
        total = len(self.results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        
        if passed == total:
            print("🎉 All tests passed!")
            return True
        else:
            print("\n❌ Failed Tests:")
            for result in self.results:
                if not result["success"]:
                    print(f"  - {result['test']}: {result['message']}")
            return False

if __name__ == "__main__":
    try:
        tester = BackendTester()
        success = tester.run_all_tests()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"❌ Test setup failed: {e}")
        sys.exit(1)