package com.axis.ijp.enums;

public enum EmployeeRole {
    HR("HR"),
    CUSTOMER_SUPPORT("Customer Support"),
    CANDIDATE("Candidate"),
    OTHER("Other");

    private String displayName;

    EmployeeRole(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}

